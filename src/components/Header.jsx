import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">Logo</div>
          </div>
          <div className="flex">
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer" }}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer" }}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="projects-section"
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer" }}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              offset={0}
              style={{ cursor: "pointer" }}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>

            <button className="bg-red-500 opacity-100 text-white rounded inline-block text-sm px-3">
              <a href="/ChristopherNievesTechResume.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
