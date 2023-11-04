import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactsData from "../data/contacts";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="contacts">
      {contactsData.map((elem) => (
        <Link
          to={`${elem.link}`}
          className="contacts__link"
          key={elem.id}
          target="_blank"
        >
          <span className="contacts__link__icon">
            <FontAwesomeIcon icon={elem.icon} size="xl" />
          </span>
          <div className="contacts__link__text">
            <span className="contacts__link__text__title">{elem.text}</span>
            {elem.id !== "email" && elem.id !== "tel num" && elem.link && (
              <span>{elem.link}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Contacts;
