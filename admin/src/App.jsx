import './App.css'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Hub from './components/Hub/Hub.jsx'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx' 
import Personnel from './pages/Personnel/Personnel.jsx'
import Logsheet from './pages/Logsheet/Logsheet.jsx'
import Notifications from './pages/Notifications/Notifications.jsx'
import User from './pages/User/User.jsx'
import Form from './pages/Form/Form.jsx'
import Project from './pages/Project/Project.jsx'
import Login from './pages/Login/Login.jsx'

import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const { session } = useAuthContext();

  return (
    <>

    { session ? 
      <main id='main-layout'>
        <Hub />
        

        <div className='dashboard-grid'>
          <Dashboard />
        </div>
        
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/personnel' element={<Personnel />}/> 
          <Route path='/logsheet' element={<Logsheet />}/>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/profile' element={<User />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/project/:id' element={<Project />}/>
        </Routes>

      </main>

      :
      
      <Login />
    }
    </>
  )
}

export default App
