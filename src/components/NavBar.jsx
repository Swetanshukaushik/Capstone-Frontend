import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import ElectricSvg from './../assets/electric.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Lock, PersonAdd, Logout } from '@mui/icons-material';
import { ListItemIcon } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';



function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar class="navbar">
      <div className="logo-container">
        <img src={ElectricSvg} className="navbar-icon"/>
        <span className="logo-text">Quick Commerce</span>
      </div>
      <div className="navbar_options">
        <Link to="/" className="home">
          <HomeIcon className='homeIcon' />
          Home
        </Link>
        <Button
        className='account_options'
          startIcon={<AccountCircleIcon />}
          onClick={handleMenu}
          color="inherit"
        >
          Account
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <Link to="/signup">Signup</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
              Logout
          </MenuItem>
          <MenuItem component={Link} to="/user" onClick={handleClose}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
              View All Users
          </MenuItem>
        </Menu>
      </div>
    </AppBar>
  );
}

export default NavBar;