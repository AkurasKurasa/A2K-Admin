import { useEffect, useState } from 'react';
import './Profile.css';
import { supabase } from '../../config/supabase';

const Profile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [ recentProject, setRecentProject ] = useState()

  const fetchRecentProject = async () => {
    const { data, error } = await supabase.from('projects').select().contains('assigned', [user.fullName]).order('created_at', { ascending: false }).limit(1).single()
    setRecentProject(data)
  }

  useEffect(() => {
    if ( showModal ) {
      fetchRecentProject()
    }
  }, [showModal])
  

  return (
    <div className='personnel-person'>
      <img className='personnel-person-image' onClick={() => setShowModal(true)} src={user.image} style={{ backgroundSize: 'contain', backgroundPosition: 'center' }}/>
      <span className='personnel-person-name'>{user.fullName}</span>
      <span className='personnel-person-title'>{user.role}</span>
      {showModal && (
        <div
          className='modal-wrapper'
          onClick={(event) => {
            if (event.target.className == 'modal-wrapper') {
              setShowModal(false);
            }
          }}
        >
          <div className='modal'>
            <div className='modal-container-1'>
              <img className='modal-image' style={{ width: '265px', height: '265px' }} src={user.image} />
              <h1 className='modal-name'>{user.fullNameUppercase}</h1>
              <p className='modal-title'>{user.position}</p>
              <p className='modal-role'>{user.role}</p>
              <div className='modal-socials'>
                <a href={user.github} target='_blank' className='github-icon'></a>
                <a href={user.whatsapp} target='_blank' className='whatsapp-icon'></a>
                <a href={user.linkedin} target='_blank' className='linkedin-icon'></a>
                <a href={user.figma} target='_blank' className='figma-icon'></a>
                <a href={user.email} target='_blank' className='mail-icon'></a>
                <a href={user.microsoft} target='_blank' className='msteams-icon'></a>
              </div>
            </div>
            <div className='modal-container-2'>
              <div className='modal-project'>
                <h1 className='modal-header'>RECENT ASSIGNED PROJECT:</h1>
                { recentProject && <div className='modal-project-image'>{recentProject.project_name}</div> }
                <div className='modal-schedule'>
                  <h1 className='modal-header'>WEEKLY SCHEDULE:</h1>
                  <div className='modal-schedule-container'>
                    <div className='modal-schedule-onsite'>
                      <div className='modal-schedule-header'>ON-SITE</div>
                      <div className='modal-schedule-day'>MONDAY</div>
                      <div className='modal-schedule-day'>WEDNESDAY</div>
                      <div className='modal-schedule-day'>FRIDAY</div>
                    </div>
                    <div className='modal-schedule-onsite'>
                      <div className='modal-schedule-header'>WFH</div>
                      <div className='modal-schedule-day'>TUESDAY</div>
                      <div className='modal-schedule-day'>THURSDAY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
