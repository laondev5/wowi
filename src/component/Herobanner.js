import React, {} from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/assets/images/banner.png'

const Herobanner = () => {
    

  return (
    <Box sx={{ mt:{lg: '151px', xs:'70px'},
        ml:{sm:'50px'} }}
        position="ralative"
        p="20px">

        <Typography 
        color="#ff2625"
        fontWeight="600"
        fontSize="28px">
            Fitness Club
        </Typography>
        <Typography
        fontWeight="700"
        sx={{ fontSize:{lg: '44px', xs:'40px'} }}
        >
            Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography 
        fontSize="28px"
        lineHeight="35px"
        mb={4}
        >
            Check out the most effective exercises
        </Typography>

        <Button 
        variant="contained"
        color="error"
        href='#exercises'>
        Explore Exercises
        </Button>
        <Typography
        fontWeight={600}
        sx={{ opacity: '0.01', display:{lg: 'block', xs:'none'} }}
        fontSize={200}
        
        >
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default Herobanner