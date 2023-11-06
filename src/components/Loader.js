import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
    return (
      <div className="loader-container">
        <div className="loader">
          <FontAwesomeIcon icon={faCircleNotch} className="icon" />
          <p className="description">Loading...</p>
        </div>
      </div>
    )
};

export default Loader;