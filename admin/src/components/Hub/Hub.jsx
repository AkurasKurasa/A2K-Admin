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
        <Link to="/profile" className="user-profile"></Link>
        <p className="user-name">A. Calma</p>
      </div>
    </div>
  );
};

export default Hub;
