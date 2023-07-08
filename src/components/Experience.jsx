import React from "react";
import swc from "/Users/Christopher/Desktop/VSCODE/Projects/Portfolio/my-project/images/1589012014218.jpeg";
import ttp from "/Users/Christopher/Desktop/VSCODE/Projects/Portfolio/my-project/images/1519902795264.jpeg";
const Experience = () => (
  <div className="p-4 bg-blue-grayish-navy text-white flex flex-wrap justify-center">
    <h2 className="text-2xl font-bold mb-8 w-full text-center">Experience</h2>

    <div className="w-3/4 m-2">
      <div className="bg-gray-200 border-2 border-gray-300 w-full mx-auto m-2 rounded-lg shadow overflow-hidden">
        <div className="flex gap-3 justify-center p-4">
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=black" />
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
          {/* Add more icons here */}
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <img src={swc} alt="Company Logo" className="w-8 h-8 mr-4" />{" "}
            {/* Adjust the size of the logo as needed */}
            <h3 className="text-xl font-semibold text-black">
              Students Who Code
            </h3>
          </div>
          <h4 className="text-lg text-black">Full Stack Developer Intern</h4>

          <ul className="list-disc pl-5 text-black">
            <li>
              Utilized Node.js, React.js, and MongoDB to improve a platform
              teaching students to code.
            </li>
            <li>
              Implemented a notification system to enhance user engagement.
            </li>
            <li>Designed and implemented a secure password reset page.</li>
            <li>Leveraged MongoDB as the primary data store.</li>
          </ul>
          <p className="text-gray-700">February 2023 - May 2023</p>
        </div>
      </div>

      <div className="bg-gray-200 border-2 border-gray-300 w-full mx-auto m-5 rounded-lg shadow overflow-hidden">
        <div className="flex justify-center gap-3 p-4">
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=black" />
          <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
          <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
          <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
        </div>
        <div className="p-6">
          <div className="flex items-center">
            <img src={ttp} alt="Company Logo" className="w-8 h-8 mr-4" />{" "}
            {/* Adjust the size of the logo as needed */}
            <h3 className="text-xl font-semibold text-black">
              Tech Talent Pipeline Residency
            </h3>
          </div>
          <h4 className="text-lg text-black">Software Engineering Student</h4>
          <ul className="list-disc pl-5 text-black">
            <li>
              Applied PostgreSQL, Express.js, React.js, Node.js to develop a
              full stack application.
            </li>
            <li>
              Utilized HTML, CSS, and React.js to create signup/login
              functionality.
            </li>
            <li>
              Created a database using PostgreSQL to manage user login
              information.
            </li>
            <li>
              Utilized React-Redux to manage user currency across all pages.
            </li>
            <li>
              Implemented an API endpoint using Express.js and PostgreSQL to
              retrieve and display player data.
            </li>
          </ul>
          <p className="text-gray-700">January 2022 - June 2022</p>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
