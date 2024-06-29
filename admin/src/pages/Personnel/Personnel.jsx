import './Personnel.css'
import Profile from '../../components/Profile/Profile'
import { useEffect, useState } from 'react'
import { supabase } from '../../config/supabase'
import { useAuthContext } from '../../context/AuthContext'

const Personnel = () => {

  const { user } = useAuthContext()
  const [ executives, setExecutives ] = useState()
  const [ employees, setEmployees ] = useState()
  const [ trainees, setTrainees ] = useState()
  const [ interns, setInterns ] = useState()

  const fetchExecutives = async () => {
    const { data, error } = await supabase.from('users').select().eq('position', 'Executive')
    setExecutives(data)
  }

  const fetchEmployees = async () => {
    const { data, error } = await supabase.from('users').select().eq('position', 'Employee')
    setEmployees(data)
  }


  const fetchTrainees = async () => {
    const { data, error } = await supabase.from('users').select().eq('position', 'OJT')
    setTrainees(data)
  }

  const fetchInterns = async () => {
    const { data, error } = await supabase.from('users').select().eq('position', 'Intern')
    console.log(data)
    setInterns(data)
  }

  useEffect(() => {

    fetchExecutives()
    fetchEmployees()
    fetchTrainees()
    fetchInterns() 

  }, [user])
  

  return (
    <div id="personnel">
      <div className="personnel-layout">

        <div className="personnel-wrapper">
          <h1 className="personnel-header">EXECUTIVES</h1>
          <div className="personnel-container">

            {
              executives &&
              
              executives.map((executive, index) => {
                return <Profile user={executive} key={index}/>
              })
            }
          
          </div>
        
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">EMPLOYEES</h1>
          <div className="personnel-container">
            {
              employees &&
              
              employees.map((employee, index) => {
                return <Profile user={employee} key={index}/>
              })
            }
          </div>
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">ON-THE-JOB TRAINEES</h1>
          <div className="personnel-container">
            {
              trainees &&
              
              trainees.map((trainee, index) => {
                return <Profile user={trainee} key={index}/>
              })
            }
          </div>
        </div>

        <div className="personnel-wrapper">
          <h1 className="personnel-header">INTERNS</h1>
          <div className="personnel-container">

            {
              interns &&
              
              interns.map((intern, index) => {
                return <Profile user={intern} key={index} />
              })
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default Personnel