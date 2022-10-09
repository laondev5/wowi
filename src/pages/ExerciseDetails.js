import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOption, fetchData, youtubeOptions } from '../utility/fetchData'
import Details from '../component/Details';
import ExerciseVideo from '../component/ExerciseVideo';
import SimilarExercises from '../component/SimilarExercises';



const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipment, setEquipment] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const fetchExerciseDetail = async () =>{
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

        //exercise detail api call
      const exerciseDetailsData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOption);
      setExerciseDetail(exerciseDetailsData)
      
      //exercise youtube video exercise call
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`, youtubeOptions);
      setExerciseVideo(exerciseVideoData.contents)
      
      //related target muscle exercise api call
      const targetMuscleData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOption);
      setTargetMuscle(targetMuscleData)

      //related target muscle exercise api call
      const equipmentData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOption);
      setEquipment(equipmentData)
    }

    fetchExerciseDetail();
  }, [id])
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      <SimilarExercises equipment={equipment} targetMuscle={targetMuscle}/>
    </Box>
  )
}

export default ExerciseDetails