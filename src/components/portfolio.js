import { Route } from 'react-router-dom'
import Designs from './designs'
import Websites from './websites'

function portfolio () {
  return (
    <div>
      <div className='header'></div>

      <div className='content'>
        <Route path='/portfolio/designs' render={Designs} />
        <Route path='/portfolio/websites' render={Websites} />
      </div>
    </div>
  )
}

export default portfolio
