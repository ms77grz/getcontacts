import { useState, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function Account() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-label='user profile'
        aria-controls='navbar-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='navbar-menu'
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
}
