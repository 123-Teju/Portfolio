import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import DrawerCom from './Drawer';
import { useMediaQuery, useTheme } from '@mui/material';
import { Store } from './Store';

const NavBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  position: 'static',
});

const Navbar = () => {
  const { state } = React.useContext(Store);
  const { UserInfo } = state;
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <NavBar sx={{ position: 'fixed' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          
        >
          TMK
        </Typography>
        {isMatch ? (
          <>
            <DrawerCom />
          </>
        ) : (
          <>
            {UserInfo ? (
              <Button
                color="inherit"
                component={NavLink}
                to="/dashboard"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? 'pink' : ' ' };
                }}
              >
                Dashboard
              </Button>
            ) : null}
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? 'pink' : ' ' };
              }}
            >
              Work
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/about"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? 'pink' : ' ' };
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={NavLink}
              to="/resume"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? 'pink' : ' ' };
              }}
            >
              Resume
            </Button>
          </>
        )}
      </Toolbar>
    </NavBar>
  );
};

export default Navbar;
