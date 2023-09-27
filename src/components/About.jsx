const About = () => {
  return (
    <section className="bg-gray-800 text-white py-10" id="about-section">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="">
            <p class="text-lg mb-4">
              Hello, I'm Christopher Nieves, a senior at The College of Staten
              Island majoring in Computer Science with an inclination towards
              backend development. I really like to think logistically, so my
              main interest lies in building and handling API endpoints. As a
              full-stack developer, I leverage technologies like HTML, CSS,
              JavaScript, and React to create visually compelling, user-friendly
              web applications. I have an inherent drive for continual learning,
              always looking to expand my technical skills. Please feel free to
              explore my work and let's collaborate!
            </p>
            <p>i didnt have a table so heres some random stuff </p>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>25</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>30</td>
                  <td>jane@example.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Emily Smith</td>
                  <td>22</td>
                  <td>emily@example.com</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Chris Evans</td>
                  <td>35</td>
                  <td>chris@example.com</td>
                </tr>
              </tbody>
            </table>
            <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ol>
            <ul>
              <li>Apple</li>
              <li>Banana</li>
              <li>Cherry</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
