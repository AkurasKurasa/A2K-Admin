import './Slider.css'

const Slider = ({ images }) => {

  return (
    <section id="slider">

        <input type="radio" name="slider" id="s1" defaultChecked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" /> 
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1" style={{backgroundImage: `url(${images[0]})` }}></label>
        <label htmlFor="s2" id="slide2" style={{backgroundImage: `url(${images[1]})` }}></label>
        <label htmlFor="s3" id="slide3" style={{backgroundImage: `url(${images[2]})` }}></label>
        <label htmlFor="s4" id="slide4" style={{backgroundImage: `url(${images[3]})`}}></label>
        <label htmlFor="s5" id="slide5" style={{backgroundImage: `url(${images[4]})` }}></label>
        
    </section>
  )
}

export default Slider