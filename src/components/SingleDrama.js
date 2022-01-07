import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';


export default function SingleDrama({drama}) {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={drama.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {drama.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {drama.desc}
        </Typography>

        <Typography variant="h6" color="text.secondary">
         {drama.category}
        </Typography>
      </CardContent>
      <CardActions variant="primary" >
        <Button size="small" onClick={()=>{
                  navigate("/episodes/"+drama._id);
        }}>View Episodes</Button>
      </CardActions>
    </Card>
  );
}
