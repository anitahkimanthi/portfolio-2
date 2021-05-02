import Header from './header'
import Banner from './banner'
import About from './about'
import Skills from './skills'
import Portfolio from './portfolio'
import Footer from './footer'

function layout () {
  return (
    <div className="row no-gutters justify-content-center">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Footer/>
    </div>
  )
}

export default layout
