import { useAuthContext } from "../../context/AuthContext";
import "./Hub.css";
import { Link } from "react-router-dom";

const Hub = () => {
  const { user } = useAuthContext()

  return (
    <div id="hub">
      <div className="options-container">
        <Link to="/notifications">
          <span className="options-option options-notification"></span>
        </Link>
      </div>
      <div className="user-container">
        { user && <Link to="/profile" className="user-profile"><img src={user.image} /></Link> }
        { user && <p className="user-name">{ user ? user.hubName : '' }</p> }
      </div>
    </div>
  );
};

export default Hub;
