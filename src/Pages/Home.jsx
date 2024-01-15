import './style.css'
import Nav from '../components/Nav'
import Gem from '../components/Gem'
import Technologies from '../components/Technologies'
import Footer from '../components/Footer'
import Computer from '../components/Computer'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Gem/>
      <Technologies/>
      <Computer/>
      <Footer/>
    </div>
  )
}

export default Home
