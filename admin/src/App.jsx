import './App.css'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Hub from './components/Hub/Hub.jsx'
// import { Routes, Route } from 'react-router-dom'

// import Home from './pages/Home/Home.jsx' 
// import Personnel from './pages/Personnel/Personnel.jsx'
// import Logsheet from './pages/Logsheet/Logsheet.jsx'
// import Notifications from './pages/Notifications/Notifications.jsx'
// import User from './pages/User/User.jsx'
// import Form from './pages/Form/Form.jsx'
// import Project from './pages/Project/Project.jsx'
// import Login from './pages/Login/Login.jsx'
import { useState } from 'react'

function App() {

  const [ loggedIn, setLoggedIn ] = useState(true)

  return (
    <>
    { loggedIn &&
      <main id='main-layout'>
        <Hub />
        <div>
        <Dashboard />
        </div>
        
        {/* <div style={ { position: 'relative' }}>
          
          <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/personnel' element={<Personnel />}/> 
            <Route path='/logsheet' element={<Logsheet />}/>
            <Route path='/notifications' element={<Notifications />}/>
            <Route path='/profile' element={<User />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/project' element={<Project />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>

        </div> */}

      </main>
    }
      
    </>
  )
}

export default App
