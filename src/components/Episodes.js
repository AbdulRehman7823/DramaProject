import React from 'react';
import {useNavigate,useLocation} from "react-router-dom";
import SingleEpisode from './SingleEpisode';
import axios from 'axios';
import {Container,Grid,Typography} from '@mui/material';

const Episodes = ()=> {

     const navigate = useNavigate();
     const location = useLocation();
    const [episodes,setEpisodes] = React.useState([]);


    const getEpisodes = () =>{
        const dramaId = location.pathname.split("/")[2];
        console.log(dramaId)
        axios.get("http://localhost:4000/api/dramas/episodes/"+dramaId).then((response) =>{
            console.log(response.data);
            setEpisodes(response.data);
        }).catch((error) =>{
            console.log(error);
        })
     }



     React.useEffect(getEpisodes,[]);




     return(
        <Container>
        
        <Grid container>

        <Grid item sm={12}>

           <Typography variant="h5" style={{textAlign:"center",marginTop:"3rem"}}>Episodes</Typography>  

           </Grid>


        <Grid item sm={12} md={12}>
           {episodes.map((episode,index)=>
            
              <SingleEpisode key={index} drama={episode}/>

           )}

           </Grid>


        </Grid>
     

     </Container>
     )
}

export default Episodes;