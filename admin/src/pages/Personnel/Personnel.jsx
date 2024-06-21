import './Personnel.css'
import Profile from '../../components/Profile/Profile'

const Personnel = () => {
  return (
    <div id="personnel">
      <div className="personnel-layout">

        <div className="personnel-wrapper">
          <h1 className="personnel-header">EXECUTIVES</h1>
          <div className="personnel-container">

            <Profile name="Jasdeep Sandhu" title="Chairman" />
            <Profile name="Daniel Jimenez" title="CEO" />
            <Profile name="Mark Nuqui" title="COO" />
          
          </div>
        

          <div className="personnel-container">

            <Profile name="Ronna Silos" title="CFO" />
            <Profile name="Jhon Nuqui" title="CTO" />
            <Profile name="Charlotte Bondoc" title="HR Director" />

          </div>
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">EMPLOYEES</h1>
          <div className="personnel-container">
            <Profile name="Aldrich" title="App Developer" />
            <Profile name="Franklin" title="Web Developer" />
            <Profile name="Alonzo" title="Web Developer" />
          </div>
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">ON-THE-JOB TRAINEES</h1>
          <div className="personnel-container">
            <Profile name="Tristan" title="Fullstack" />
            <Profile name="Jose" title="Frontend" />
            <Profile name="Keren" title="Backend" />
          </div>
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">INTERNS</h1>
          <div className="personnel-container">

            <Profile name="Andrei Calma" title="Web Developer" />
            <Profile name="Ashley Silos" title="Electronics" />
            <Profile name="Rastafari Sarzona" title="Electronics" />

          </div>
        </div>

      </div>
    </div>
  )
}

export default Personnel