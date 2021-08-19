import "./About.css";
import Navigation from "../components/Navigation";

function About() {
  return (
    <div className="about">
      <Navigation />
      <div className="about__text">
        About this page: I build it because I love movies.
      </div>
    </div>
  );
}

export default About;
