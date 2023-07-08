import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faVuejs,
  faAngular,
  faSass,
  faBootstrap,
  faNodeJs,
  faPython,
  faPhp,
  faAws,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const skillSections = [
    {
      title: "Frontend",
      icon: faLaptopCode,
      skills: [
        { name: "html", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Javascript", icon: faJs },
        { name: "React.js", icon: faReact },
        { name: "Vue.js", icon: faVuejs },
        { name: "Angular", icon: faAngular },
        { name: "Sass", icon: faSass },
        { name: "Bootstrap", icon: faBootstrap },
        //more skills....
      ],
    },
    {
      title: "Backend",
      icon: faServer,
      skills: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Python", icon: faPython },
        { name: "PHP", icon: faPhp },
        //more skills....
      ],
    },
    {
      title: "Databases/Servers",
      icon: faDatabase,
      skills: [
        { name: "MySQL", icon: faNode },
        //more skills....
      ],
    },
  ];

  return (
    <div className="bg-gray-800">
      <h1 className="text-2xl text-white font-bold p-4">Skills</h1>
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="shadow-md p-6 bg-gray-300 rounded-lg flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            <h2 className="text-xl font-bold">Frontend</h2>
          </div>
          <ul className="flex flex-wrap justify-center space-x-4 space-y-2">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=black" />
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=black" />
            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
            <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
          </ul>
        </div>
        <div className="shadow-md p-6 bg-gray-300 rounded-lg flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faServer} size="2x" />
            <h2 className="text-xl font-bold">Backend</h2>
          </div>
          <ul className="flex flex-wrap justify-center space-x-4 space-y-2">
            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"></img>
            <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"></img>
            <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"></img>
            <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></img>
          </ul>
        </div>
        <div className="shadow-md p-6 bg-gray-300 rounded-lg flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <h2 className="text-xl font-bold">Databases and Servers</h2>
          </div>
          <ul className="flex flex-wrap justify-center space-x-4 space-y-2">
            <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"></img>
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></img>
            <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"></img>
            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"></img>
            <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"></img>
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
