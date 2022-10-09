import React from 'react';
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ equipment, targetMuscle}) => {
  console.log(equipment)
  console.log(targetMuscle)
  return (
    <Box 
    sx={{ mt:{lg: '90px', xs: '0'} }}>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: '25px', pl: '10px' }}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction="row" 
      sx={{ p: '2px', position: 'relative'}}>
          {targetMuscle.length ? <HorizontalScrollbar data={targetMuscle} /> : <Loader /> }
      </Stack>

      <Typography variant="h3" fontWeight="bold" sx={{ mb: '25px', pl: '10px', mt: '100px' }}>
        Exercise with similar equipment
      </Typography>
      <Stack direction="row" 
      sx={{ p: '2px', position: 'relative'}}>
          {equipment.length ? <HorizontalScrollbar data={equipment} /> : <Loader /> }
      </Stack>

      
      </Box>
  )
}

export default SimilarExercises