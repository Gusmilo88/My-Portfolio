import './style.css'
import Nav from '../components/Nav'
import H1 from '../components/H1/H1'
import Gem from '../components/Gem'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='div-name-gem'>
        <H1/>
        <Gem/>
      </div>
    </div>
  )
}

export default Home
