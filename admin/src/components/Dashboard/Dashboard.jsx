import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../config/supabase';
import './Dashboard.css';

const Dashboard = () => {
  const [ activeOption, setActiveOption ] = useState('home');
  const [ projects, setProjects ] = useState()
  const [ forms, setForms ] = useState()

  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select().order('created_at', {ascending: true})
    setProjects(data)
  }

  const fetchForms = async () => {
    const { data, error } = await supabase.from('forms').select().order('created_at', {ascending: true})
    setForms(data)
  }

  useEffect(() => {
    fetchProjects()
    fetchForms()
  }, [])
  

  return (
    <nav id='dashboard'>
      {/* LOGO CONTAINER */}
      <div className='logo-container'>
        <img src='../src/assets/logo.png' alt='A2K LOGO' className='logo' />
        <p className='logo-admin-text'>ADMIN PANEL</p>
      </div>

      {/* NAVIGATION CONTAINER */}
      <div className='navigation-container'>
        <h1 className='navigation-header'>GENERAL</h1>

        <Link to='/'>
          <p
            className={activeOption == 'home' ? 'navigation-option-active' : 'navigation-option'}
            onClick={() => setActiveOption('home')}
          >
            HOME
          </p>
        </Link>
        <p
          className={activeOption == 'staff' ? 'navigation-option-dropdown-active' : 'navigation-option-dropdown'}
          onClick={() => setActiveOption('staff')}
        >
          STAFF
        </p>
        <ul
          className={activeOption == 'staff' ? 'navigation-dropdown navigation-dropdown-active' : 'navigation-dropdown'}
        >
          <li>
            <Link to='/personnel'>PERSONNEL</Link>
          </li>
          <li>
            <Link to='/logsheet'>LOGSHEET</Link>
          </li>
        </ul>

        <p
          className={activeOption == 'projects' ? 'navigation-option-dropdown-active' : ' navigation-option-dropdown'}
          onClick={() => setActiveOption('projects')}
        >
          PROJECTS
        </p>
        <ul
          className={
            activeOption == 'projects' ? 'navigation-dropdown navigation-dropdown-active' : 'navigation-dropdown'
          }
        >

          {
            projects && 
            projects.map((project, index) => {
              return <li key={index}>
                <Link to={`/project/${project.project_id}`} style={{color: '#9b9b9b'}}>{project.project_name}</Link>
              </li>
            })
          }


        </ul>

        <p
          className={activeOption == 'forms' ? 'navigation-option-dropdown-active' : 'navigation-option-dropdown'}
          onClick={() => setActiveOption('forms')}
        >
          FORMS
        </p>
        <ul
          className={activeOption == 'forms' ? 'navigation-dropdown navigation-dropdown-active' : 'navigation-dropdown'}
        >
          {
            forms &&
            forms.map((form, index) => {
              return <li key={index}>
                <Link to={`/form/${form.form_id}`} style={{color: '#9b9b9b'}}>{form.form_name}</Link>
              </li>
            })
          }
          {/* <li>
            <Link to='/form'>FORM</Link>
          </li>
          <li>
            <Link to='/form'>FORM</Link>
          </li>
          <li>
            <Link to='/form'>FORM</Link>
          </li>
          <li>
            <Link to='/form'>FORM</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Dashboard;
