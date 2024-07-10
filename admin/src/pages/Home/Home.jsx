import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { supabase } from '../../config/supabase'
import { useAuthContext } from '../../context/AuthContext'

const Home = () => {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date()
  const day = days[date.getDay()]

  const { userData } = useAuthContext()
  const [ projects, setProjects ] = useState()
  const [ officer, setOfficer ] = useState()

  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select().order('created_at', { ascending: true })
    let userProjects = []

    if (error) throw error

    if ( data ) {
      data.forEach(project => {
        if (project.assigned.includes(userData.fullName)) {
          userProjects.push(project)
        }
      });
    }

    setProjects(userProjects)
    
  }

  const fetchOfficer = async () => {
    const { data, error } = await supabase.from('daily_duty_officer').select().eq('day', day).single()
    if (error) throw error

    if ( data ){
      setOfficer(data)
    }
  }

  useEffect(() => {
    fetchProjects()
    fetchOfficer()
  }, [userData])
  

  return (
    <div id='home'>
      <div className="home-layout">
        
        <div>
          <div className='home-container'>
            <h1 className='home-header'>ASSIGNED PROJECTS</h1>
            <div className='projects-container'>
              
              { projects && 
                projects.map((project, index) => {
                  return <Link key={index} to={`/project/${project.project_id}`} className='projects-project' style={{backgroundImage: `url(${project.images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    {/* <p>{project.project_name}</p> */}
                  </Link>
                }) 
              }
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
                { officer && <p> { officer.primary } </p> }
              </span>
              <span className="value-container">
                <h1>RESERVE:</h1>
                { officer && <p> { officer.reserve } </p> }
              </span>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home