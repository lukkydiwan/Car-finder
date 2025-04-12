import { useState } from 'react';
import Button from '@mui/material/Button';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import MediaCard from './MediaCard';
import "./Search.css";
import "@fontsource/orbitron";
import { Grid } from '@mui/material';


export default function Search(){
  let [car , setCar] = useState("");
  let [carList , setCarList] = useState([]);
  let [hasSearched , setHasSearched] = useState(false);
  let getInfo = async()=>{
    let response = await fetch('http://localhost:4000/cars')
    let jsonResponse = await response.json();
    let filterCar = jsonResponse.filter(item=>
      item.model.toLowerCase().includes(car.toLowerCase()) ||
    item.brand.toLowerCase().includes(car.toLowerCase())
    );
    setCarList(filterCar);
    console.log(filterCar);
    };
  
  let handleChange = (event)=>{
      setCar(event.target.value);
   };
   let handleSubmit= (event)=>{
    event.preventDefault();
     getInfo();
    setHasSearched(true);
    setCar("");
   }
  
  return (
    <>
    <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}>Search Your Car</h1>
   
    <form onSubmit={handleSubmit}>
      <input type="text" className="search" onChange={handleChange} label="Search Your Car" required value={car} style={{ fontFamily: 'Orbitron, sans-serif' }
      }
      />

    <Button variant='Outlined'  aria-label="delete" className='btn' type='submit' style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Search
        <DirectionsCarFilledIcon />
      </Button>
      </form>

      
  {hasSearched &&( <div className='cardContainer'>
    { carList.length === 0 ? ( 
    <li>No cars found.</li>
  ) : (
    <Grid container spacing={2}>
    {carList.map((car) => (
      <Grid item md={4} key={car.id}>
     <MediaCard car={car} key={car.id}/>
     </Grid>
    ))}
    </Grid>
  )}
</div>
  )}
    </>
  );
}
