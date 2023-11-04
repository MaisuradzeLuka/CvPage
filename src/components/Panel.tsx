import PhotoBox from "./PhotoBox";
import Navigation from "./Navigation";
import Button from "./Button";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IPanel {
  showNavBar: boolean;
  onColapse: () => void;
}

const Panel = ({ showNavBar, onColapse }: IPanel) => {
  return (
    <aside className={`panel ${!showNavBar ? "panel--colapsed" : ""}`}>
      <PhotoBox name="Luka Maisuradze" avatar="/user.png" styles="panel__img" />
      <Navigation />
      <Link to="/">
        <Button styles="panel__btn">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />{" "}
          <span>Go Back</span>
        </Button>
      </Link>

      <Button styles="panel__hamburger" clickHandler={onColapse}>
        <FontAwesomeIcon icon={faBars} size="lg" data-testid="hamburgerMenu" />
      </Button>
    </aside>
  );
};

export default Panel;
