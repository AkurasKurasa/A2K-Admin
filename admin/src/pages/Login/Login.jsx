import { useState, useEffect } from 'react'
import { supabase } from '../../config/supabase'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useAuthContext } from '../../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
  const { setSession, setUserId } = useAuthContext()
  const navigate = useNavigate();

  const [ info, setInfo ] = useState({
    email: '', password: ''
  })

  const handleChange = (event) => {
    setInfo({...info, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {

      const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: info.email,
          password: info.password
        }
      )

      if (error) notify()
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    supabase.auth.getSession().then((data) => {
      setSession(data.data.session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
  }, [])
  
  const notify = () => 
    toast.error('Invalid credentials!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
    });

  return (
    
    <div id='login'>
      <ToastContainer
        stacked={true}
        position="top-right"
        autoClose={3000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      <div className="login-logo-container">
        <div className="login-logo"></div>
        <div className="login-logo-admin">ADMIN</div>

      </div>

      <div className="login-text">LOG IN</div>

      <form onSubmit={handleSubmit}>
        <div className="login-fill-container">
          <div className="login-input-container">
            <h1 className="login-input-parameter">EMAIL</h1>
            <input type="text" className="login-input" name='email' onBlur={handleChange}/>
          </div>

          <div className="login-input-container">
            <h1 className="login-input-parameter">PASSWORD</h1>
            <input type="password" className="login-input" name='password' onBlur={handleChange}/>
          </div>
        </div>

        <div className="login-buttons-container">
          <button className="login-button-main">LOG IN</button>
        </div>
      </form>

      <p className="login-message">In order to use an accessible  account, please talk to management.</p>
      
    </div>
  )
}

export default Login