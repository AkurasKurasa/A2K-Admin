import './User.css'

const User = () => {
  return (
    <div id='user'>
      <div className="user-layout">
        <div className="user-image"></div>
        <h1 className="user-username">PAUL ANDREI CALMA</h1>
        <p className="user-title">Intern</p>
        <div className="user-control-container">
          <p className="user-control">LOGOUT</p>
        </div>
      </div>
    </div>
  )
}

export default User