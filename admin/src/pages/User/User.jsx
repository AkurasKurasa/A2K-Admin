import './User.css'
import { supabase } from '../../config/supabase'
import { useAuthContext } from '../../context/AuthContext'

const User = () => {
  const { setUser } = useAuthContext()

  const handleClick = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }
  return (
    <div id='user'>
      <div className="user-layout">
        <div className="user-image"></div>
        <h1 className="user-username">PAUL ANDREI CALMA</h1>
        <p className="user-title">Intern</p>
        <div className="user-control-container">
          <p className="user-control" onClick={handleClick}>LOGOUT</p>
        </div>
      </div>
    </div>
  )
}

export default User