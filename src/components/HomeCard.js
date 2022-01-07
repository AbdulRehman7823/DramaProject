import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container  } from '@mui/material';


export default function HomeCard() {
  return (
    <Container>
   <Card sx={{ minWidth: 375 }} color="secondary" style={{ marginTop:"4rem" , backgroundColor:"#f1f1f1"}}>
      <CardContent>
        <Typography variant ="h2"  sx={{ fontSize: 30 }} color="text.secondary" gutterBottom style={{ textAlign: "center" ,margin:"2rem"}}>
                  Drama Site Name
        </Typography>
        <Typography variant="h5"  sx={{ fontSize: 20 }} gutterBottom style={{ marginBottom:"3rem" }}>
                 Enjoy Time while watching Dramas
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Latest Drama Series
        </Typography>
        <Typography variant="body1">
           All Pakistani Dramas and seasons
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>    
    </Container>
  );
}
