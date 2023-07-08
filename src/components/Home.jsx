import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "/Users/Christopher/Desktop/VSCODE/Projects/Portfolio/my-project/images/1645612701463.jpeg";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {
  return (
    <section className="home-section bg-blue-grayish-navy text-white flex items-center justify-center min-h-screen">
      <div className="flex items-start text-center">
        <img src={me} className="w-40 h-40 rounded-full mr-4"></img>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Welcome, I'm Christopher Nieves
          </h1>
          <p className="text-lg mb-8">Passionate Full Stack Developer</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/chrisnieves60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-nieves/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCircleInfo} size="3x" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
