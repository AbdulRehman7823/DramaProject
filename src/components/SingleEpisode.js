import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';


export default function SingleEpisode({episode}) {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={episode.img}
        alt="green iguana"
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
        <Button size="small" >Watch</Button>
      </CardActions>
    </Card>
  );
}
