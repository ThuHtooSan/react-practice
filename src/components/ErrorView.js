import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ErrorView = ({ error, errorController }) => {
  let suggestion = null;
  if (error === '404') {
    error = 'Could not fetch data.';
    suggestion = 'This API endpoint probably does not exist!'
  }

  return (
    <div className="error-container">
      <div className="error">
      <FontAwesomeIcon icon={faFaceFrown} className="icon"/>
        <h4 className="reason">{ error }</h4>
        { suggestion 
          ? <p className="suggestion">{suggestion}</p>
          : <p className="suggestion">
              Please create a new issue on <a href="https://github.com/ThuHtooSan/react-practice">GitHub</a>.
            </p> 
        }
        <button onClick={errorController} className="remove-error" title="Close error dialog">
          <FontAwesomeIcon icon={faCircleXmark} />
          </button>
      </div>
    </div>
  );
}

export default ErrorView;