import { Adb } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const pages=["Home","About","Services",'Contactus']
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar1 = () => {
    const [anchorElNav,setAnchorElNav]=useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
       
        setAnchorElNav(event.currentTarget);
        console.log(event.currentTarget,'Current target')
        console.log((Boolean( event.currentTarget)))
      };
    const handleCloseNavMenu=(event)=>{
  
        setAnchorElNav(null)
        console.log(Boolean(null))
    }
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
  <Stack>
   <AppBar>
   <Container maxWidth="xl">
    <Toolbar>
        <Adb sx={{display:{xs:"none",md:"flex"}}}/>
        <Typography variant="h6"
            noWrap
            component="a"
            href="/"
             sx={{display:{xs:"none",md:"flex"},
             textDecoration:"none",
             color:"inherit",
             fontFamily:"monospace", 
              fontWeight: 700,
              letterSpacing: '.2rem',}}>
        Logo
        </Typography>
        <Box sx={{flex:1,display:{xs:"flex",md:"none"}}}>
        <IconButton   
        size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
        <MenuIcon/>

        </IconButton>
        <Menu
        id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
               {pages.map((page)=>(
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page}
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
             flex:"1",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
            
        <Box sx={{ flex:1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
    </Toolbar>
    </Container>
   </AppBar> 


  </Stack>
  )
}

export default Navbar1