import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./MediaCard.jsx"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function MediaCard({car}) {
  let [isLiked , setIsliked] = useState(false);
  let like=()=>{
    isLiked ? setIsliked(false) : setIsliked(true);
  }
    return (
      <Card className='card'
  sx={{
   fontFamily: 'Orbitron, sans-serif',
    backgroundColor: '#1a1a1a',
    color: '#5ef6ff',
    border: '2px solid #2570d4',
    borderRadius: '12px',
    width: 300,
    height: 420, 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 2,
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 0 10px #2570D4, 0 0 10px #2570d4',
      transform: 'scale(1.02)',
    }
  }}
>
        <CardMedia
          sx={{ height: 200 }}
          image={car.image}
        />
        <CardContent style={{ fontFamily: 'Orbitron, sans-serif'}}>
          <div onClick={like} >
          {
            isLiked?
             <FavoriteBorderIcon sx={{
              color: '#f75049'
              ,transition: '0.3s'}}/> :
             <FavoriteIcon sx={{
              position: 'relative',
              right: '0px',
              color: '#f75049',
              boxShadow: '0 0 10px #f75049, 0 0 10px #f75049' 
              ,transition: '0.3s' }}/>
          }
          </div>
          <Typography gutterBottom variant="h4" component="div" style={{ color:'white', fontFamily: 'Orbitron, sans-serif'}}>
             {car.brand} {car.model}

          </Typography>
          <Typography component="div" style={{ color:'white',fontFamily: 'Orbitron, sans-serif'}}>
          ₹{car.price} <br/> {car.fuelType} <br/> Seating capacity:{car.seatingCapacity}
          </Typography>
        </CardContent>
      </Card>
    );
  }