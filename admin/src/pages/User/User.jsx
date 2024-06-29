import './User.css'
import { supabase } from '../../config/supabase'
import { useAuthContext } from '../../context/AuthContext'
import { Suspense } from 'react'

const User = () => {
  const { setUserId, setSession, setUser, user } = useAuthContext()

  const handleClick = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setUserId(null)
    setUser(null)
  }

  return (
    <div id='user'>
      <div className="user-layout">
        { user && <img className="user-image" src={user.image} /> }
        <h1 className="user-username">{ user ? user.fullNameUppercase : ' ' }</h1>
        <p className="user-title">{ user ? user.position : ' ' }</p>
        <div className="user-control-container">
          <p className="user-control" onClick={handleClick}>LOGOUT</p>
        </div>
      </div>
    </div>
  )
}

export default User