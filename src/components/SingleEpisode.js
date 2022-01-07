import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function SingleEpisode({episode}) {

  const navigate = useNavigate();
/*
  const [episode,setEpisode] = React.useState({});



  const getEpisode = ()=> {
    axios.get("http://localhost:4000/api/episodes/"+episodeId._id).then((res)=>{
       setEpisode(res.data);
    }).catch((err)=>{
      console.error(err);
    })
  }
  

  React.useEffect(getEpisode,[]);*/
  return (
    <Card sx={{ maxWidth: "100%" }}>
          {console.log(episode)}
     <iframe
      width="853"
      height="480"
      src="https://www.youtube.com/embed/"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {episode.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {episode.desc}
        </Typography>
      </CardContent>
      <CardActions variant="primary" >
        <Button size="small" onClick={()=>{
        }} >Watch</Button>
      </CardActions>
    </Card>
  );
}
