import { skillsStyles } from './styles'
import { BorderLinearProgress } from './styles'
import { Typography, Divider, Box } from '@material-ui/core'
import { data } from '../data/data'

function Skills (props) {
  const classes = skillsStyles()
  const skillsData = data.skills

  return (
    <div className='col-12 centerColumn'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-10 centerColumn'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-5'>
              <h2 className="heading">
                <span className="tag">1</span>
                <b>Technical Skills</b>
              </h2>

              {skillsData.frontend.map((skill, index) => (
                <Box
                  key={index}
                  display='flex'
                  alignItems='center'
                  className={classes.bar}
                >
                  <Box width='100%' mr={1} >
                    <span>{skill.heading}</span>
                    <BorderLinearProgress
                      variant='determinate'
                      value={skill.tag}
                    />
                  </Box>
                  <Box minWidth={35}>
                    <Typography variant='body2' color='textSecondary'>
                      {skill.tag}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </div>

            <div className='col-12 col-sm-2'>
              <Divider
                orientation='vertical'
                className={classes.line}
                flexItem
              />
            </div>

            <div className='col-12 col-sm-5'>
              <h2 className="heading">
                <span className="tag">2</span>
                <b>Design Skills</b>
              </h2>
              {skillsData.design.map((skill, index) => (
                <Box
                  key={index}
                  display='flex'
                  alignItems='center'
                  className={classes.bar}
                >
                  <Box width='100%' mr={1}>
                    <span>{skill.heading}</span>
                    <BorderLinearProgress
                      variant='determinate'
                      value={skill.tag}
                    />
                  </Box>

                  <Box minWidth={35}>
                    <Typography variant='body2' color='textSecondary'>
                      {skill.tag}%
                    </Typography>
                  </Box>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
