import {
  Typography,
  Card,
  CardContent,
  Divider
} from '@material-ui/core'
import {data} from "../data/data"
import aboutbg from '../static/images/about.jpg'
import { aboutStyles } from './styles'

function about () {
  const classes = aboutStyles()

  return (
    <div className='col-12 col-sm-11 col-md-10  col-lg-8 about' id="about">
      <div className="row">
        <div className='col-12 col-md-7'>
          <Typography
            gutterBottom
            variant='h4'
            component='h1'
            className={classes.heading}
          >
            About me
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.about.about}
          </Typography>
        </div>

        <div className='col-12 col-md-5'>
          <img
            alignItems='center'
            justify='center'
            xs={12}
            className='img-fluid aboutImage'
            src={aboutbg}
          />
        </div>
      </div>

      <Divider />

      <div className='row justify-content-center whatido'>
        <div className='col-12 col-md-5'>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='h1'
                className={classes.heading}
              >
                UI Design
              </Typography>

              <Typography variant='body2' color='textSecondary' component='p'>
              {data.about.design}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='col-12 col-md-2'></div>
        <div className='col-12 col-md-5'>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='h1'
                className={classes.heading}
              >
                Web Development
              </Typography>

              <Typography variant='body2' color='textSecondary' component='p'>
              {data.about.development}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default about
