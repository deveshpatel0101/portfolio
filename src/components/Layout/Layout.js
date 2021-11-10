import React, { Fragment } from 'react';
import './Layout.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { AppBar, Toolbar, IconButton, Typography, Hidden, Drawer } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import Content from '../Content/Content';
import MenuItems from '../MenuItems/MenuItems';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Hidden smUp implementation='css'>
          <AppBar className='Mobile-AppBar'>
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Devesh Patel
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>

        <nav aria-label='menu items'>
          {/* Drawer that shows up for small screen sizes */}
          <Hidden smUp implementation='css'>
            <Drawer
              variant='temporary'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              className='Small-Scren-Drawer'
            >
              <MenuItems handleDrawerToggle={this.handleDrawerToggle} />
            </Drawer>
          </Hidden>

          {/* Drawer that shows up for large screen sizes */}
          <Hidden xsDown implementation='css'>
            <Drawer variant='permanent' open className='Large-Screen-Drawer'>
              <MenuItems />
            </Drawer>
          </Hidden>
        </nav>

        <main>
          <Content />
        </main>
      </Fragment>
    );
  }
}

export default Layout;
