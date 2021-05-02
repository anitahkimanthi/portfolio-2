import { banner } from './styles'
import bgimage from '../static/images/bg.png'
import {
    CardMedia,
    Typography
  } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function Banner () {
  const classes = banner()

  return (
    <div className='col-12 nopadding banner'>
      <CardMedia
          alt=""
          image={bgimage}
          className="img-fluid"
          title="Contemplative Reptile"
        >

      <div className='introduction'>
        <Typography
          gutterBottom
          variant='h4'
          component='h1'
          className={classes.heading}
        >
          <b>Anitah Kimanzi</b>
        </Typography>

        <Typography gutterBottom variant='h6' component='h4'>
          Software Developer
        </Typography>

        <Typography
          gutterBottom
          variant='body2'
          component='p'
          className={classes.location}
        >
          <span>
            <LocationOnIcon />
          </span>
          <span>Nairobi, Kenya</span>
        </Typography>
        
      </div>
      </CardMedia>
    </div>
  )
}

export default Banner
