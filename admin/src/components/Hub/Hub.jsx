import './Hub.css'
import { Link } from 'react-router-dom'

const Hub = () => {
  return (
    <div id="hub">
        {/* <div className="clock-container">
          <h1 className='clock-country-container'>
            <span className='clock-country-name'>PH</span>
            <span className='clock-country-arrow'></span>
          </h1>
          <p className='clock-time'>00 : 00 : 00</p>
          <p className='clock-status'>OPEN</p>
        </div> */}
        <div className="options-container">
          {/* <span className='options-option options-setting'></span> */}
          <Link to='/notifications'><span className='options-option options-notification'></span></Link>
        </div>
        <div className="user-container">
            <Link to='/profile' className='user-profile'></Link>
            <p className='user-name'>A. Calma</p>
        </div>
    </div>
  )
}

export default Hub