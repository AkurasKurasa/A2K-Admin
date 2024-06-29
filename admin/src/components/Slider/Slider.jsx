import './Slider.css'

const Slider = () => {

  // const radioButtons = document.querySelectorAll('input[type=radio]');

  // const slideShow = () => {
  //   for(let i =0; i<radioButtons.length; i++){
  //     setInterval(() => {
  //       console.log(i)
  //     }, 3000)
  //   }
  //  }

  //  slideShow()

  return (
    <section id="slider">

        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" /> 
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1" style={{backgroundImage: "url('https://i.imgur.com/IGCBUVB.jpeg')"}}></label>
        <label htmlFor="s2" id="slide2" style={{backgroundImage: "url('https://i.imgur.com/tOokzYS.jpeg')"}}></label>
        <label htmlFor="s3" id="slide3" style={{backgroundImage: "url('https://i.imgur.com/kQjLLeh.jpeg')"}}></label>
        <label htmlFor="s4" id="slide4" style={{backgroundImage: "url('https://i.imgur.com/QyD3J3D.jpeg')"}}></label>
        <label htmlFor="s5" id="slide5" style={{backgroundImage: "url('https://i.imgur.com/vQhQ3Ib.png')"}}></label>
        
    </section>
  )
}

export default Slider