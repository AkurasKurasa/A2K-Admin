import { useAuthContext } from "../../context/AuthContext";
import "./Hub.css";
import { Link } from "react-router-dom";

const Hub = () => {
  const { userData } = useAuthContext()

  return (
    <div id="hub">
      <div className="options-container">
        <Link to="/notifications">
          <span className="options-option options-notification"></span>
        </Link>
      </div>
      <div className="user-container">
        { userData && <Link to="/profile" className="user-profile"><img src={userData.image} /></Link> }
        { userData && <p className="user-name">{ userData.hubName }</p> }
      </div>
    </div>
  );
};

export default Hub;
