import React from 'react';
import SingleDrama from './SingleDrama';
import axios from 'axios';
import {Container,Grid,Typography} from '@mui/material';

const Dramas = () => {    
   const [dramas, setDramas]  = React.useState([]);

   const getDramas = () =>{
      axios.get("http://localhost:4000/api/dramas/").then((response) =>{
          console.log(response.data);
          setDramas(response.data);
      }).catch((error) =>{
          console.log(error);
      })
   }

   
   React.useEffect(getDramas,[]);


    return ( <div>
    
      <Container>
        
         <Grid >

         <Grid item sm={12}>

            <Typography variant="h5" style={{textAlign:"center",margin:"6rem"}}>Dramas</Typography>  

            </Grid>


         
            {dramas.map((drama,index)=>
            <Grid item sm={4} md={4} >
               <SingleDrama key={index} drama={drama}/>
               </Grid>

            )}
            


         </Grid>
      

      </Container>

          
    </div> );
}
 
export default Dramas;