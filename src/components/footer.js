import { footer } from './styles'
import { Grid, ListItem, List, Typography } from '@material-ui/core'
import { data } from '../data/data'

function Footer () {
  const classes = footer()
  const footerContent = data.footer
  return (
    <div className='footer col-12'>
      <div className='row no-gutters justify-content-center'>
        <div className='col-12 col-md-6 text-center'>
          <br />
          <br />
          <h2 className={classes.contactTitle}>
            <strong>LETS TALK</strong>
          </h2>

          <Typography variant='body2' color='textSecondary' component='p'>
            {footerContent.description}
          </Typography>
          <a
            href='mailto:anitakimanzi@gmail.com? subject=subject text'
            data-scroll-reveal='enter from the bottom after 0.6s'
          >
            <button className={classes.button}>Contact me!</button>
          </a>
          <br />
        </div>

        <div className='col-12 text-center'>
          <List className='social'>
              {footerContent.social.map((content, i) => (
                <li key={i} className={classes.socialItem}>
                  <a href={`${content.url}`}>
                    <span className={classes.socialIcons} title={content.title}>
                      {content.icon}
                    </span>
                  </a>
                </li>
              ))}
            </List>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Footer
