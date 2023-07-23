import { Reorder } from '@mui/icons-material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import ReorderIcon from '@mui/icons-material/Reorder';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, Menu, MenuItem, OutlinedInput, TextField, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';


export default function Header() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (

    <AppBar position="relative" sx={{ backgroundColor: '#f5f5f5', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      {isMdScreen ? (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LocalHospitalIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Power Pharma
        </Typography>
        </div>
      ) : (
        <LocalHospitalIcon sx={{ mr: 2 }} />
      )}
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ marginLeft: '2em', marginRight: '3em', width: isMdScreen ? '40%' : 'auto' }}
          InputProps={{
            startAdornment: <IconButton><SearchIcon /></IconButton>,
          }}
        />
          {isMdScreen ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <Typography variant="body1">About</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Typography variant="body1">Enquiry</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Typography variant="body1">Categories</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Typography variant="body1">Contact Us</Typography>
          </IconButton>
        </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
      >
        <Reorder sx={{ color: 'black' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Enquiry</MenuItem>
        <MenuItem onClick={handleMenuClose}>Categories</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
      </Menu>
    </div>
          )}
      </Toolbar>
    </AppBar>
  )
}