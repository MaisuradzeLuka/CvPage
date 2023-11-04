import { Link } from "react-router-dom";
import Button from "../components/Button";
import PhotoBox from "../components/PhotoBox";

const Welcome = () => {
  return (
    <main className="welcome">
      <div className="welcome__contentWrapper">
        <PhotoBox
          styles="welcome__contentWrapper__photoBox"
          name="Luka Maisuradze"
          avatar="/user.png"
          title="Front-end Web Developer"
          description="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product."
        />

        <Link to="/portfolio">
          <Button>Know More</Button>
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
