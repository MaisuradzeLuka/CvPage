import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <dialog className="dialog" open>
      <h1>Page Not Found</h1>
      <p className="dialog__para">
        Lookes like you have followed a broken link or entered a URL that doesnt
        exist on the site
      </p>
      <Link to="/" className="dialog__link">
        Back to home page
      </Link>
    </dialog>
  );
};

export default ErrorPage;
