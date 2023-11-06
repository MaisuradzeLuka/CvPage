import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Loading from "../components/Loading";
import Box from "../components/Box";
import Contacts from "../components/Contacts";
import Feedback from "../components/Feedback";
import Experience from "../components/Experience";
import Panel from "../components/Panel";
import Portfolio from "../components/Portfolio";
import TimeLine from "../components/Timeline";
import Button from "../components/Button";
import feedbackData from "../data/feedback.json";
import experienceData from "../data/experience.json";
import aboutMeData from "../data/aboutMe.json";
import ScrollSpy from "react-ui-scrollspy";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchEducationData } from "../features/education/educationSlice";
import Skills from "../components/Skills";
import { changeShowSkill } from "../features/skills/skillsSlice";
import { ToastContainer } from "react-toastify";

const CvPage = () => {
  const [showNavBar, setShowNavBar] = useState(true);

  const dispatch = useAppDispatch();
  const { loading, errMsg, educationData } = useAppSelector(
    (state) => state.education
  );
  const { showSkills } = useAppSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchEducationData());
  }, []);

  const onColapse = () => {
    setShowNavBar((prev) => !prev);
  };

  const clickHandler = () => {
    dispatch(changeShowSkill());
  };

  const scrollToTop = () => {
    const options = {
      duration: 800,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };

  return (
    <div className="cvWrapper">
      <ToastContainer />
      <Panel showNavBar={showNavBar} onColapse={onColapse} />
      <main className={`cvMain ${!showNavBar ? "cvMain--wide" : ""}`}>
        <ScrollSpy scrollThrottle={0}>
          <section id="about me" className="cvMain__aboutMe">
            <Box title={aboutMeData.title} styles="cvMain__aboutMe">
              {aboutMeData.text}
            </Box>
          </section>

          <section id="education">
            <h2>Education</h2>
            <div className="cvMain__education">
              {loading ? (
                <Loading />
              ) : (
                <>
                  {errMsg && (
                    <p className="error">
                      Something went wront. Please review your server connection
                    </p>
                  )}
                  {!errMsg &&
                    educationData?.map((elem, i) => (
                      <TimeLine {...elem} key={i} />
                    ))}
                </>
              )}
            </div>
          </section>

          <section id="experience" className="cvMain__experience">
            <h2>Experience</h2>
            {experienceData.map((elem) => (
              <Experience {...elem} key={elem.id} />
            ))}
          </section>

          <section id="skills">
            <div className="skills__header">
              <h2>Skills</h2>
              <Button clickHandler={clickHandler}>
                <FontAwesomeIcon icon={faPenToSquare} />
                Open Edit
              </Button>
            </div>
            <Skills showSkills={showSkills} />
          </section>

          <section id="portfolio">
            <h2>Portfolio</h2>
            <Portfolio />
          </section>

          <section id="contacts">
            <h2>Contacts</h2>
            <Contacts />
          </section>

          <section id="feedback">
            <h2>Feedbacks</h2>
            {feedbackData.map((elem) => (
              <Feedback {...elem} key={elem.id} />
            ))}
          </section>
        </ScrollSpy>
      </main>

      <Button styles="scrollToTop" clickHandler={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} size="lg" />
      </Button>
    </div>
  );
};

export default CvPage;
