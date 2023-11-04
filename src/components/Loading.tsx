import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faRotate} className="loading__icon" size="lg" />
    </div>
  );
};

export default Loading;
