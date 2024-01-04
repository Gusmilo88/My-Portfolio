import './style.css'
import Nav from '../components/Nav'
import H1 from '../components/H1/H1'
import Gem from '../components/Gem'
import Technologies from '../components/Technologies'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='div-name-gem'>
        <H1/>
        <Gem/>
      </div>
      <Technologies/>
    </div>
  )
}

export default Home
