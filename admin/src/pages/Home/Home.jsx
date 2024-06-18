import './Home.css'

const Home = () => {
  return (
    <div id='home'>
      <div className="home-layout">
        
        <div>
          <div className='home-container'>
            <h1 className='home-header'>ASSIGNED PROJECTS</h1>
            <div className='projects-container'>
              <article className='projects-project'></article>
              <article className='projects-project'></article>
              <article className='projects-project'></article>
              <article className='projects-project'></article>
              <article className='projects-project'></article>
              <article className='projects-project'></article>
            </div>
          </div>
        </div>

        <div>
          <div className='home-container'>
            <div className="group-container">
              <h1 className='home-header'>STATUS</h1>
              <p className='home-highlighted'>JUNE 09, 2024</p>
              <span className="value-container">
                <h1>CLOCKED IN:</h1>
                <p>00:00:00</p>
              </span>
              <span className="value-container">
                <h1>CLOCKED OUT:</h1>
                <p>00:00:00</p>
              </span>
              <p className="status-status">ACTIVE</p>
            </div>

            <div className="group-container">
              <h1 className='home-header'>DAILY</h1>
              <p className='home-highlighted'>DAILY DUTY OFFICER</p>
              <span className="value-container">
                <h1>PRIMARY:</h1>
                <p>JOHN DOE</p>
              </span>
              <span className="value-container">
                <h1>RESERVE:</h1>
                <p>JANE DOE</p>
              </span>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home