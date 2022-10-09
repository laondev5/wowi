import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import LOGO from '../assets/assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap:{sm: '122px', xs: '40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent: 'none' }}
    px="20px"
    >
        <Link to="/">
            <img src={LOGO} alt="img" style={{ width: '48px', height: '48px',  margin: '0 20px' }} />
        </Link>

        <Stack
        direction="row"
        gap="48px"
        fontSize="24px"
        alignItems="flex-end"

        >
            <Link to="/" style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '2px solid #ff2625'  }}>Home</Link>
            <a href='#exercise' style={{ textDecoration: 'none', color: '#3a1212'  }}>exercise</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
