import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceMeh, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <div className="not-found-container">
      <h2 className="title">Page Not Found</h2>
      <FontAwesomeIcon icon={faFaceMeh} className="icon"/>
      <p className="description">The requested url <span className="path-url">{currentPath}</span> was not found on the server.</p>
      <button onClick={handleClick} className="go-back">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
        Go back
      </button>
    </div>
  );
}

export default NotFound;