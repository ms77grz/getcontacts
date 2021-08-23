import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import Box from '@material-ui/core/Box';

import Drawer from './Drawer';
import Search from './Search';
import Account from './Account';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Drawer />
            <Box flexGrow={1} display={{ xs: 'none', sm: 'block' }}>
              <Typography variant='h6'>Material UI Workshop</Typography>
            </Box>
            <Search />
            <Account />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
}
