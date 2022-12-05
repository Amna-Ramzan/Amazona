// import React from 'react'
// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'

// import Logo from '../images/logo.png';
// export default function Navbar() {
// const [nav,setNav]=useState(false)
// const handleClick=()=>setNav(!nav)


//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
//       {/* logo */}
//       <div className="animation">
//         <img src={Logo} at="" style={{ width: '100px' }} />
//       </div>
//              {/* menu */}
//       <div className='hidden md:flex'>
//         <ul className=' hidden md:flex'>
//           <li>Home</li>
//           <li>About</li>
//           <li>Skills</li>
//           <li>work</li>
//           <li>Contact</li>
//         </ul>
//       </div>

//       {/* hamburger */}
//       <div
//        onClick={handleClick}
//         className='md:hidden z-10'>
//        {!nav ?<FaBars />:<FaTimes/>} 
//       </div>
//       {/* mobile menu */}
//       <ul
//        className={!nav ? 'hidden' :' md:hidden absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center'}
//        >
//       <li className='py-6 text-4xl hover:bg-white hover:text-black  '>Home</li>
//           <li className='py-6 text-4xl hover:bg-white hover:text-black  '>About</li>
//           <li className='py-6 text-4xl hover:bg-white hover:text-black  '>Skills</li>
//           <li className='py-6 text-4xl hover:bg-white hover:text-black  '>work</li>
//           <li className='py-6 text-4xl hover:bg-white hover:text-black  '>Contact</li>
//       </ul>


//     </div>
//   )
// }
// import React from 'react'
import PropTypes from 'prop-types'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.Navbar}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>


              <li className="nav-item">
                <a className="nav-link disabled">About</a>
              </li>
            </ul>

          </div>
          {/* ---------- */}

          {/* <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div> */}
          <CustomizedSwitches toggle={props.data}  />
        
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  Navbar: PropTypes.string
}



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))
  (({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));



function CustomizedSwitches(props) {
  return (
  <FormGroup>
  <button onClick={()=>{console.log(props,"test")}}> btn</button>
    <FormControlLabel
     onClick={props.toggle}
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      label="MUI switch"
    />

  </FormGroup>
  );
}
