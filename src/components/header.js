import React from 'react'
import {Link} from 'react-router-dom'
import {
  AppBar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useTheme,
  Typography,
  Hidden,
  Avatar,
  SwipeableDrawer
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { headerStyles } from './styles'
import { data } from '../data/data'
import logo from '../static/images/logos/l1.png'

const Sidebar = props => {
  console.log(props)
  const classes = headerStyles()
  return (
    <div className={classes.drawer}>
      <CloseIcon
        className={classes.close}
        onClick={props.handleOpenMenu}
      />

      <List>
        {data.header.map((item, index) => (
          <a href={item.url} key={index} className={classes.link}>
            <ListItem>
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </a>
        ))}
      </List>
    </div>
  )
}

const Nav = () => {
  const theme = useTheme()
  const classes = headerStyles()
  const [menu, setMenu] = useState(false)

  const handleOpenMenu = () => {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <div className='header'>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <MenuIcon
              color='inherit'
              aria-label='open drawer'
              onClick={handleOpenMenu}
              edge='start'
              className={classes.menuButton}
            ></MenuIcon>
            <Typography className={classes.brand}>
              <Link to="/">
              <ListItem>
                <Avatar
                  variant='square'
                  className={classes.avator}
                  src={logo}
                />
                <ListItemText primary='Anitah Kimanzi' />
              </ListItem>
              </Link>
            </Typography>

            <List className={classes.navitems}>
              {data.header.map((item, index) => (
                <a href={item.url} key={index} className={classes.link}>
                  <ListItem>
                    <ListItemText primary={item.text} />
                    <Divider />
                  </ListItem>
                </a>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </div>

      <nav>
        <Hidden smUp implementation='css'>
          <SwipeableDrawer
            open={menu}
            variant='temporary'
            onClose={handleOpenMenu}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          >
            <Sidebar handleOpenMenu={handleOpenMenu} />
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <br />
      <br />
    </div>
  )
}

function header (props) {
  return <Nav />
}

export default header
