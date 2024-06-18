import { useState } from 'react'
import './Profile.css'

const Profile = ({name, title}) => {
    
    const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="personnel-person">
            <div className="personnel-person-image" onClick={() => setShowModal(true)}></div>
            <span className='personnel-person-name'>{name}</span>
            <span className='personnel-person-title'>{title}</span>
            {
              showModal &&
              <div className='modal-wrapper' onClick={(event) => {
                if (event.target.className == 'modal-wrapper') {
                  setShowModal(false)
                }
              }}>
                <div className='modal'>
                  <div className="modal-container-1">
                    <div className="modal-image" style={{ width: '265px', height: '265px'}}></div>
                    <h1 className="modal-name">PAUL ANDREI CALMA</h1>
                    <p className="modal-title">Intern</p>
                    <p className="modal-role">Web Developer</p>
                    <div className="modal-socials">
                      <img src="../src/assets/github-icon.svg" />
                      <img src="../src/assets/whatsapp-icon.svg" />
                      <img src="../src/assets/linkedin-icon.svg" />
                      <img src="../src/assets/figma-icon.svg" />
                      <img src="../src/assets/mail-icon.svg" />
                      <img src="../src/assets/teams-icon.svg" />
                    </div>
                  </div>
                  <div className="modal-container-2">
                    <div className="modal-project">
                      <h1 className="modal-header">RECENT ASSIGNED PROJECT:</h1>
                      <div className="modal-project-image"></div>
                      <div className="modal-schedule">
                        <h1 className="modal-header">WEEKLY SCHEDULE:</h1>
                        <div className="modal-schedule-container">
                          <div className="modal-schedule-onsite">
                            <div className="modal-schedule-header">ON-SITE</div>
                            <div className="modal-schedule-day">MONDAY</div>
                            <div className="modal-schedule-day">WEDNESDAY</div>
                            <div className="modal-schedule-day">FRIDAY</div>
                          </div>
                          <div className="modal-schedule-onsite">
                            <div className="modal-schedule-header">WFH</div>
                            <div className="modal-schedule-day">TUESDAY</div>
                            <div className="modal-schedule-day">THURSDAY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            }
    </div>
  )
}

export default Profile