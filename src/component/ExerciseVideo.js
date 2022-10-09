import React from 'react';
import {Box, Typography, Stack } from '@mui/material'

const ExerciseVideo = ({exerciseVideo, name}) => {
  //                    
  if(!exerciseVideo.length) return 'Loading...'
    
  return (
    <Box
    sx={{ marginTop:{lg:'200px', xs:'20px'} }} p="20px">
      <Typography variant="h3">
        Watch <span style={{ color:"#ff1212" }}>{name}</span> exercise videos
      </Typography>
      <Stack flexWrap="wrap" alignItems="center" justifyContent="flex-start"
      sx={{ flexDirection: {lg: 'row'}, gap:{lg:'70px', xs:'0'}, mt: {lg: '30px', xs: '20px'} }}>
        {exerciseVideo.slice(0,6).map((item, index)=>(
         <a key={index}
         className="exercise-video"
         href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
         target="_blank"
         rel="noreferrer">
          <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Typography variant="h5" fontWeight="bold" style={{ color: '#ff1212', pt: '20px ' }}>
            {item.video.title}
          </Typography>
          <Typography variant="h6" fontWeight="400" style={{ color: '#000' }}>
            {item.video.channelName}
          </Typography>
         </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo