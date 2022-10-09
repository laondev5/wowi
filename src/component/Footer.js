import React from 'react'
import {Box, Typography, Stack} from '@mui/material';
import LOGO from '../assets/assets/images/Logo.png';

const Footer = () => {
  return (
    <Box  mt="80px" bgcolor="#fff3f4">
      <Stack direction="colum" justifyContent="center" alignItems="center" p="20px">
      <img src={LOGO} alt="logo" sx={{ width: '100px', height: '100px',  }} alignSelf="center" />
      </Stack>
      <Typography variant="h3" textAlign="center" color="#ff1212" fontWeight="bold">
        Moden Exercise and fitness websit
      </Typography>
      <Typography variant="h6" textAlign="center">
        Created by loandev5
      </Typography>
    </Box>
  )
}

export default Footer