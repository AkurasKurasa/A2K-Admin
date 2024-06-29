import { useState } from 'react'
import { supabase } from '../../config/supabase'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useAuthContext } from '../../context/AuthContext'

const Login = () => {
  const { setSession, setUserId, getUserInfo } = useAuthContext()
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

      if (error) throw error
      getUserInfo()
      setSession(data.session.access_token)
      setUserId(data.user.id)
      navigate('/')
      
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div id='login'>
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
          {/* <button className="login-button-alternative" onClick={gitHubLogIn}>CONTINUE WITH MICROSOFT</button>
          <button className="login-button-alternative">CONTINUE WITH GITHUB</button> */}
        </div>
      </form>

      <p className="login-message">In order to use an accessible  account, please talk to management.</p>
      
    </div>
  )
}

export default Login