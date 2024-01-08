import './style.css'
import Nav from '../components/Nav'
import Gem from '../components/Gem'
import Technologies from '../components/Technologies'
import { Footer } from 'flowbite-react'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Gem/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default Home
