import GGCPhoto from "../images/Screen Shot 2023-07-02 at 6.23.01 PM.png";
const Projects = () => {
  return (
    <section className="p-4 bg-blue-grayish-navy" id="projects-section">
      <h1 className="text-2xl font-bold mb-8 w-full text-center text-white">
        Projects
      </h1>

      <div className="border-2 border-white w-7/8 mx-auto m-5 flex items-center bg-gray-100 rounded-lg shadow">
        <img src={GGCPhoto} alt="Project" className="w-1/3" />
        <div className="p-6">
          <h1 className="text-xl text-black font-bold">NBA Card Collecting</h1>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
          <p className="text-black">
            Full-stack web application using PostgreSQL, Express.js, React.js,
            and Node.js, centered around a basketball card collection. Features
            include as user signup/login, currency management, and visually
            appealing website design. Users can sign up, go to the store, open
            any of three packs displayed, and whichever player they get from the
            pack they opened, will be displayed in their My Collection page.
          </p>
          <div className="flex mt-4">
            <a
              href="https://github.com/chrisnieves60/TTP-Capstone-Project-Frontend"
              className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              GitHub
            </a>
            <a
              href="https://ggc-numahn.vercel.app"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
