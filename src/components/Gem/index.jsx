import Spline from '@splinetool/react-spline'
import './style.css'


const Gem = () => {
  return (
    <>
    <div className='div-Container' data-aos="zoom-in">
      <div className='divGemContainer'>
      <h1 className='h1Title'>Hello, I'm <span className='gradient-text-name'>Gus Romero</span> frontend developer</h1>
        <Spline className='gem' scene="https://prod.spline.design/hSE6LJD9LiS-1xgS/scene.splinecode" />
      </div>
    </div>
    <div className='div-arrow'>
    <img className='img-arrow' src="/src/assets/images/arrow.png" alt="" />
  </div>
    </>
  )
}

export default Gem
