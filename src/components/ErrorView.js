import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ErrorView = ({ error: rawError, errorController }) => {

  const commonErrors = {
    '404': {
      'message': 'Could not fetch data.',
      'suggestion': 'This page does not exist!'
    },
    'default': {
      'message': rawError,
      'suggestion': 'Please create a new issue on GitHub.'
    }
  }

  const error = commonErrors.hasOwnProperty(rawError)
    ? commonErrors[rawError]
    : commonErrors.default;

  return (
    <div className="error-container">
      <div className="error">
        <FontAwesomeIcon icon={faFaceFrown} className="icon"/>
        <h4 className="message">{ error.message }</h4>
        <p className="suggestion">{ error.suggestion }</p>
        <a href="https://github.com/ThuHtooSan/react-practice/issues" target="_blank" rel="noreferrer" className="report">Report Issue</a>

        {/* close button */}
        <button onClick={errorController} className="remove-error" title="Close error dialog">
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
}

export default ErrorView;