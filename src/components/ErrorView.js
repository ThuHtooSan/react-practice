import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link, useLocation } from "react-router-dom";

const ErrorView = ({ error, errorController }) => {
  const location = useLocation();

  return (
    <div className="error-container">
      <div className="error">
        <FontAwesomeIcon icon={faFaceFrown} className="icon"/>
        { error.message 
          ? <h4 className="message">{ error.message }</h4>
          : <h4 className="message">{ error.status }</h4> }
        { error.message && <p className="status">{ error.status }</p> }
        <div className="btn-group">
          { location.pathname !== '/' && 
          <Link to="/">
            <button className="back-to-home">Back to Home</button>
          </Link> }
          <a href="https://github.com/ThuHtooSan/react-practice/issues" target="_blank" rel="noreferrer" className="report">Report Issue</a>
        </div>

        {/* close button */}
        <button onClick={errorController} className="remove-error" title="Close error dialog">
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
}

export default ErrorView;