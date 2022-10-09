import React, { useState } from 'react';

import { Box } from '@mui/material';

import Herobanner from '../component/Herobanner';
import Searchbar from '../component/Searchbar';
import Exercises from '../component/Exercises';


const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodypart] = useState('all');
    return ( 
        <Box >
        <Herobanner / >
        <Searchbar 
        setExercises = { setExercises }
        bodyPart = { bodyPart }
        setBodypart = { setBodypart }/>

        <Exercises 
        setExercises = { setExercises }
        bodyPart = { bodyPart }
        exercises = { exercises }/> 
        </Box >
    )
}

export default Home