import { DeleteOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import TagCard from "./TagCard";
import Container from "@mui/material/Container";
import OrderTable from "./orderTable";
import {makeStyles} from "@mui/styles";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {ThemeProvider ,createTheme} from '@mui/material/styles';
import axios from 'axios';
import ProductTable from './productTable';
import {useNavigate} from 'react-router-dom';
import {Profile} from "./profile";



const theme = createTheme({
  palette:{
    success: {
      main: '#ffffff'
    }
  }
});

const TodoComponent = () => {
    const navigate = useNavigate();
  const [todos,setTodos] = React.useState([]);
  const [pendingTodos,setPendingTodos] = React.useState(0);
  const [completedTodos,setCompletedTodos] = React.useState(0);

   const fillRows = ()=>{
     var rows = [];

     todos.map( (todo,index)=>{
          rows[index]= {id:index,
                        title:todo.title,
                        status:todo.status,
                        date: todo.date,
          };

     });
        return rows;

   }

   const getTodos = ()=>{
       setPendingTodos(0);
       setCompletedTodos(0);
     axios.get("http://localhost:4000/api/users/gettodos/"+userId).
     then((res)=> res.data).
     then((r)=>{setTodos(r);
     r.map(todo=>{
         if(todo.status=="completed")
         setCompletedTodos(u=>u+1);
         if(todo.status=="ongoing")
         setPendingTodos(u=>u+1);
     }); })
     .catch((err)=>{
       console.log(err);
     });
   }

   const deleteProductByName = (name) => {

     var foundProduct = {};
     products.map(product=>{
           if(product.title ===name){
              foundProduct = product; 
            }
       });
       axios.delete("http://localhost:4000/api/products/"+foundProduct._id).then((response)=>{
           console.log(response);
           getProducts();
       }).catch((error)=>{
           console.log(error);
       })
   }
   
    
    const getTodoIdByName = (name) =>{
        var foundTodo = {};
     todos.map(todo=>{
           if(todo.title ===name){
              foundTodo = todo; 
            }
       });
       return foundTodo._id;
    }


   React.useEffect(getTodos,[]);



  return (
    <ThemeProvider theme={theme}>
    <Container>

    <Profile/>
      <Grid container spacing={3}>
        <Grid item  sm={12} md={6} lg={4}>
           {}
          <TagCard
            title={"Completed Todo"}
            value={totalProducts}
            icon={<AutorenewIcon fontSize="large" color="success"/>}
            category="todo"
            background="#32c225"
          />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <TagCard
            title={"Pending Todo"}
            icon={<AssignmentTurnedInIcon fontSize="large" color="success" />}
            category="todo"
            background="#2581c2"
          />
        </Grid>
      </Grid>
      <ProductTable  rows={fillRows()} delete={deleteProductByName}  update={getProductIdByName}></ProductTable>
    </Container>
    </ThemeProvider>
  );
};
export default TodoComponent;
