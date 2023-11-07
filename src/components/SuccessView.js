import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const SuccessView = ({ success: rawSuccess, successController }) => {

  const commonSuccess = {
    201: {
      message: 'Blog created!',
      blogId: rawSuccess.blogId
    },
    'default': {
      message: `Success!: ${rawSuccess.message}`
    }
  }

  const success = commonSuccess.hasOwnProperty(rawSuccess.status)
    ? commonSuccess[rawSuccess.status]
    : commonSuccess.default;

  return (
    <div className="success-container">
      <div className="success">
        <FontAwesomeIcon icon={faFaceSmile} className="icon" />
        <h4 className="reason">{ success.message }</h4>
        <div className="btn-group">
          <Link to="/">
            <button className="back-to-home">Back to Home</button>
          </Link>
          { success.blogId && 
            <Link to={`/blogs/${success.blogId}`}>
              <button className="go-to-blog">Go to blog</button>
            </Link> }
        </div>
        {/* close button */}
        <button onClick={successController} className="remove-error" title="Close success dialog">
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
}

export default SuccessView;