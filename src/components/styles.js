import { makeStyles , withStyles} from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'


const drawerWidth = 240

export const headerStyles = makeStyles(theme => ({
  brand: {
    flexGrow: 1
  },

  avator: {
    marginRight: theme.spacing(1)
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    marginRight: theme.spacing(2)
  },
  text: {},

  drawer: {
    width: drawerWidth
  },
  paper: {
    width: '100% !important'
  },

  toolbar: theme.mixins.toolbar,

  toolbar: {
    backgroundColor: '#ffffff',
    color: '#3f3f3f'
  },

  close: {
    float: 'right',
    marginTop: '10px',
    marginRight: '20px'
  },
  navitems: {
    display: 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  link: {
    textDecoration : "none",
    color: "inherit"
  }
}))

export const banner = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2)
  },
  bgmedia: {
    height: 400,
    width: '100%',
    color: "#fffff"
  },
  introduction: {
    textAlign: 'left',
    justify: 'center',
    color: "#ffffff",
    position: "absolute",
    alignContent: 'center',
    padding: '5%'
  }
}))

export const projects = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2)
  },
  media: {
    height: 190
  }
}))

export const footer = makeStyles(theme => ({
  button: {
    background: '#71180C',
    color: '#ffffff',
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    border: 'none',
    borderRadius: "30px",
    margin: "20px"
  },
  contactTitle: {
    fontSize: '3rem',
    color: '#71180C'
  },
  socialmedia: {
    display: 'flex'
  },

  socialItem: {
    marginRight: "20px",
    color: '#71180C'
  },
  socialIcons: {
    color: '#c2c2c2'
  }
}))

export const aboutStyles = makeStyles(theme => ({
  aboutImage: {
    height: 250,
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  wrapper: {
    display: 'flex',
    padding : "2rem 0"
  },
  aboutwrapper: {
    padding: '4rem 1rem'
  },
  heading: {
    fontWeight: 900
  },
  column: {
    margin: theme.spacing(4)
  },
  card: {
      height: "100%",
      boxShadow : "none"
  }
}))

export const skillsStyles = makeStyles(theme => ({
  skillswrapper: {
    background: '#F2F2F2',
    padding: theme.spacing(6)
  },
  skillsection1: {
    marginRight: '2rem'
  },
  skillsection2: {
    marginLeft: '2rem'
  },
  title: {
    textAlign: 'center'
  },
  line : {
    [theme.breakpoints.down("sm")]: {
        display : 'none'
    }
  },
  bar : {
      marginTop : "15px"
  }
}))

// skills bar styles
export const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  
  }))(LinearProgress);