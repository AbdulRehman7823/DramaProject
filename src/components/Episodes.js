import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SingleEpisode from "./SingleEpisode";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";

const Episodes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [episodesId, setEpisodesId] = React.useState([]);
  const [episodes, setEpisode] = React.useState([]);

  const getEpisodes = () => {
    const dramaId = location.pathname.split("/")[2];
    axios
      .get("http://localhost:4000/api/dramas/episodes/" + dramaId)
      .then((response) => {
         let array = [];

          response.data.map((data) =>{
            axios.get("http://localhost:4000/api/episodes/"+data._id).then((res)=>{
               array.push(res.data);
               setEpisode(array);
               console.log(episodes);
          })
           
         })
         })
          
      .catch((error) => {
        console.log(error);
      });
  };

  
  React.useEffect(getEpisodes, []);

  return (
    <Container>
      <Grid container>
        <Grid item sm={12}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", marginTop: "3rem" }}
          >
            Episodes
          </Typography>
        </Grid>

        <Grid item sm={12} md={12}>
          {episodes.map((episode, index) => (
            <SingleEpisode key={index} episode={episode} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Episodes;
