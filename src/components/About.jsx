import "../styles.css" 
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
            <div class="container">
  <div class="header">
    <div>ID</div>
    <div>Name</div>
    <div>Age</div>
    <div>Email</div>
  </div>
  <div class="row">
    <div>1</div>
    <div>John Doe</div>
    <div>25</div>
    <div>john@example.com</div>
  </div>
  <div class="row">
    <div>2</div>
    <div>Jane Doe</div>
    <div>30</div>
    <div>jane@example.com</div>
  </div>

</div>


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
