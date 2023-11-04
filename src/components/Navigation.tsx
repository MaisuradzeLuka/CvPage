import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navData from "../data/navigation";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="navBar">
      {navData.map((elem) => {
        return (
          <Link
            to={elem.id}
            smooth={true}
            offset={-100}
            duration={800}
            data-to-scrollspy-id={elem.id}
            className="navBar__link"
            key={elem.id}
          >
            <span className="navBar__link__icon">
              <FontAwesomeIcon icon={elem.icon} size="lg" />
            </span>
            <span className="navBar__link__text">{elem.text}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
