import React from 'react';
import {Stack, Typography} from '@mui/material';
import ICON from '../assets/assets/icons/gym.png'

const Bodypart = ({item, setBodypart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    onClick={()=>{
      setBodypart(item);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
    sx={{
      borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        gap: '47px'
    }}
      
     
     >
      <img src={ICON} alt="dumbel" style={{ 
        width: '40px',
        height: '40px',
       }} />

       <Typography 
       fontWeight="600"
       fontSize={20}
       textTransform="capitalize"
       color="#3a1212">{item}</Typography>
    </Stack>
  )
}

export default Bodypart