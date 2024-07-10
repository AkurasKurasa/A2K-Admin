import './User.css'
import { supabase } from '../../config/supabase'
import { useAuthContext } from '../../context/AuthContext'

const User = () => {
  const { userData } = useAuthContext()

  const handleClick = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div id='user'>
      <div className="user-layout">
        { userData && <img className="user-image" src={userData.image} /> }
        <h1 className="user-username">{ userData ? userData.fullNameUppercase : ' ' }</h1>
        <p className="user-title">{ userData ? userData.position : ' ' }</p>
        <div className="user-control-container">
          <p className="user-control" onClick={handleClick}>LOGOUT</p>
        </div>
      </div>
    </div>
  )
}

export default User