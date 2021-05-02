import {
  Card,
  Typography,
  Button,
  CardActions,
  CardContent,
  Divider,
  CardMedia,
  CardActionArea
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { data } from '../data/data'

function websites () {
  const projects = data.projects

  return (
    <div className='websites'>
      <div className='col-md-11 col-xl-10 projects' id="portfolio">
        <div className='row'>
          <div className='col-12 text-center'>
            <h3 className="heading">
              <b>Some projects</b>
            </h3>
          </div>
        </div>

        <div className='row'>
          {projects.map((proj, i) => (
            <div className='col-12 col-sm-6 col-md-4 projectCard'>
              <a href={proj.link}>
                <Card className='cardInfo'>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={proj.title}
                      height='300'
                      image={proj.image}
                      title={proj.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h6' component='h3'>
                        {proj.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {proj.description}
                      </Typography>
                    </CardContent>

                    <Divider />

                    <CardActions className='cardFooter'>
                      <a href={proj.link}>
                        <Button size='small' color='primary'>
                          View project
                        </Button>
                      </a>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default websites
