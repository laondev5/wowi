import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Stack, Typography} from '@mui/material';
import { fetchData, exerciseOption } from '../utility/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const Searchbar = ({bodyPart, setBodypart, exercises, setExercises}) => {
    const [search, setSearch] = useState('');
   
    const [bodyParts, setBodyparts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);

            setBodyparts(['all', ...bodyPartsData]);

            
        }

         fetchExercisesData();
    }, [])

    const handelSearch = async ()=>{
        if(search){
             const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('')
            setExercises(searchedExercises)
        }
    }
  return (
    <Stack
    alignItems="center"
    justifyContent="center"
    mt="37px"
    p="20px">
        <Typography 
        fontWeight="600"
        sx={{ fontSize:{lg: '28px', xs: '24px'}, textAlign: 'center' }}
        mb={20}>
            Awesome Exercises You <br/> Should Know
            </Typography>

        <Box position="relative"
        mb="23px">
            <TextField 
            sx={{ 
                

                input:{
                    fontWeight:'700',
                    border: 'none',
                    borderRadius: '4px'

                },
                width:{
                    lg: '800px', 
                    sm: '350px'
                },
                backgroundColor: '#fff',
                borderRadius: '40px'
             }}
             height="72px"
             type="text"
             placeholder="Search for exercise"
             value={search}
             onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>

             <Button 
             className="search-btn"
             onClick={handelSearch}
             sx={{ 
                bgcolor: '#ff2625',
                color: '#fff',
                textTransform: 'none',
                width:{
                    lg: '175px',
                    sm: '80px'
                },

                fontSize:{
                    lg: '20px',
                    sm: '14px'
                },

                height: '56px'

              }}>
                Search
             </Button>
        </Box>
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: '20px'
        }}>
            <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodypart={setBodypart} isBodyPart />
        </Box>
    </Stack>
  )
}

export default Searchbar