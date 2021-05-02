import { footer } from './styles'
import {
  Grid,
  ListItem,
  List,
  Typography
} from '@material-ui/core'
import {data} from "../data/data"


function Footer () {
  const classes = footer()
  const footerContent = data.footer
  return (
    <div className='footer col-12' >
      <div className="row no-gutters justify-content-center">
        
        <div className="col-12 col-md-6 text-center">
          <br />
          <br />
          <h2 className={classes.contactTitle}>
            <strong>LETS TALK</strong>
          </h2>

          <Typography variant='body2' color='textSecondary' component='p'>
            {footerContent.description}
          </Typography>

          <List className='social'>
              {footerContent.social.map((content, i) =>(
                  <ListItem
                  key={i}
                  className={classes.socialItem}
                  title={content.title}
                >
                  <a href={`${content.url}`}>
                    <span className={classes.socialIcons}>
                    {content.icon}
                    </span>
                  </a>
                </ListItem>
              ))}
          </List>
          <br />
          <br />
        </div>

        <div className='col-12 text-center'>
          <a
            to='mailto:anitakimanzi@gmail.com? subject=subject text'
            data-scroll-reveal='enter from the bottom after 0.6s'
          >
            <button className={classes.button}>Get a Website Now!</button>
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Footer
