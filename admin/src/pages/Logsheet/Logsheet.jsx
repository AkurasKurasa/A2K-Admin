import './Logsheet.css'
const Logsheet = () => {
  return (
    <div id='logsheet'>
      <div className='logsheet-header'>
        <h1 className="logsheet-date">JUNE 09, 2024</h1>
        <div className="logsheet-up"></div>
        <div className="logsheet-down"></div>
      </div>
      <div className="logsheet-layout">

        <div className="logsheet-wrapper">
          <h1 className="logsheet-time-stamp">08:00 AM</h1>
          <div className="logsheet-log">
            <h1 className="log-time">08:01 am</h1>
            <p className="log-info">Andrei Calma clocked in work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">08:02 am</h1>
            <p className="log-info">Rastafari Sarzona clocked in work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">08:03 am</h1>
            <p className="log-info">Ashley Silos clocked in work-from-home.</p>
          </div>
        </div>

        <div className="logsheet-wrapper">
          <h1 className="logsheet-time-stamp">08:05 AM</h1>
          <div className="logsheet-log">
            <h1 className="log-time">08:06 am</h1>
            <p className="log-info">Aldrich clocked in work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">08:07 am</h1>
            <p className="log-info">Franklin clocked in work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">08:08 am</h1>
            <p className="log-info">Alonzo clocked in work-from-home.</p>
          </div>
        </div>

        <div className="logsheet-wrapper">
          <h1 className="logsheet-time-stamp">05:00 PM</h1>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Andrei Calma clocked out work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Rastafari Sarzona clocked out work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Ashley Silos clocked out work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Andrei Calma clocked out work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Rastafari Sarzona clocked out work-from-home.</p>
          </div>
          <div className="logsheet-log">
            <h1 className="log-time">05:00 pm</h1>
            <p className="log-info">Ashley Silos clocked out work-from-home.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Logsheet