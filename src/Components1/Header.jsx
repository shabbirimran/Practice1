import { Adb} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'

import Banner from './Banner';
const Header = () => {
    const pages = ['Projectss', 'Advantages', 'Examples','Records','Results',"WorkFormat"];

  return (
   <Stack sx={{display:"flex",flexDirection:"column",background: "black"}}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
      <Container maxWidth="ul" >
        <Toolbar disableGutters>
            <Box>
                <img src={logo} alt="myimage"/>
            </Box>
          {/* <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={""}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={""}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean("")}
              onClose={""}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={""}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={""}
                sx={{ my: 2, color: '#FFF', display: 'block',
                fontFamilyamily: "Roboto",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "700",
                textTransform:"none",
                alignItems:"flex-start",
                paddingLeft:"87px"
                 }}
              >
                {page}
              </Button>

            ))}
          </Box>
          <Box sx={{flexGrow:0}}>
           <Button sx={{color:"white",width:"200px",border:"3px solid white",padding:"20px",borderRadius:"5px",marginTop:"2px",marginRight:"180px"}}>
                    Conct with us
                 </Button>
                 </Box>

                  </Toolbar>

      </Container>
    </AppBar>
    <Banner/>
   </Stack>
  )
}

export default Header