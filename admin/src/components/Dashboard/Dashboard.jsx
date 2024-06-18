import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {

  const [ activeOption, setActiveOption ] = useState("home");

  return (
    <nav id='dashboard'>

        <img src="../src/assets/logo.png" alt="" className='logo' />
        <p className='logo-temp'>ADMIN PANEL</p>

        <div className="navigation-container">
            <h1 className='navigation-header'>GENERAL</h1>

            <Link to='/'>
              <p 
                className={ activeOption != "home" ? 'navigation-option' : 'navigation-option-active' } 
                onClick={ () => setActiveOption("home") }
              >HOME</p>
            </Link>

            {/* <Link to='/calendar'>
              <p 
                className={ activeOption != "calendar" ? 'navigation-option' : 'navigation-option-active' } 
                onClick={ () => setActiveOption("calendar") }
              >CALENDAR</p>
            </Link> */}
            <p 
              className={ activeOption != "staff" ? ' navigation-option-dropdown' : 'navigation-option-dropdown-active' } 
              onClick={ () => setActiveOption("staff") }
            >STAFF</p>
            <ul className={ activeOption != "staff" ? 'navigation-dropdown' : "navigation-dropdown navigation-dropdown-active"}>
              <li><Link to='/personnel'>PERSONNEL</Link></li>
              <li><Link to='/logsheet'>LOGSHEET</Link></li>
            </ul>

            {/* <p 
              className={ activeOption != "equipment" ? ' navigation-option-dropdown' : 'navigation-option-dropdown-active' } 
              onClick={ () => setActiveOption("equipment") }
            >EQUIPMENT</p>
            <ul className={ activeOption != "equipment" ? 'navigation-dropdown' : "navigation-dropdown navigation-dropdown-active"}>
              <li><Link to='/status'>STATUS</Link></li>
              <li><Link to='/reports'>REPORTS</Link></li>
            </ul> */}

            <p 
              className={ activeOption != "projects" ? ' navigation-option-dropdown' : 'navigation-option-dropdown-active' } 
              onClick={ () => setActiveOption("projects") }
            >PROJECTS</p>
            <ul className={ activeOption != "projects" ? 'navigation-dropdown' : "navigation-dropdown navigation-dropdown-active"}>
              <li>PROJECT 1</li>
              <li>PROJECT 2</li>
              <li>PROJECT 3</li>
              <li>PROJECT 4</li>
            </ul>

            <p 
              className={ activeOption != "forms" ? ' navigation-option-dropdown' : 'navigation-option-dropdown-active' } 
              onClick={ () => setActiveOption("forms") }
            >FORMS</p>
            <ul className={ activeOption != "forms" ? 'navigation-dropdown' : "navigation-dropdown navigation-dropdown-active"}>
              <li>FORM 1</li>
              <li>FORM 2</li>
              <li>FORM 3</li>
              <li>FORM 4</li>
            </ul>

        </div>

    </nav>
  )
}

export default Dashboard