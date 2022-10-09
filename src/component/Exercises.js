import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exerciseOption, fetchData } from '../utility/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesParPage = 9

  const indexOfLastPage = currentPage * exercisesParPage;
  const indexOfFirstExercise = indexOfLastPage - exercisesParPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastPage)

  const paginate = (e, value) =>{
    setCurrentPage(value)
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async ()=>{
      let exercisesData = []

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

      }else(
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption)
      )

      setExercises(exercisesData)
      
    }

    
    fetchExercisesData() 
  }, [bodyPart]);
  
  return (
    <Box
    id="exercises"
    sx={{ mt:{lg: '110px'} }}
    mt="50px"
    p="20px">

      <Typography
      variant="h4"
      mb="40px">
        Showing results
      </Typography>
      <Stack direction="row"
      sx={{ gap: {lg: '110px', xs: '50px'} }}
      flexWrap="wrap"
      justifyContent="center">

        {currentExercises.map((exercise, index)=>(
          <ExerciseCard key={exercise.index} exercise={exercise} />
        ))}

        

      </Stack>

      <Stack mt="80px" alignItems="center">
            {exercises.length > 9 && (
              <Pagination 
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisesParPage)}
              page={currentPage}
              onChange={paginate}
              size="large"/>
            )}
      </Stack>

    </Box>
  )
}

export default Exercises