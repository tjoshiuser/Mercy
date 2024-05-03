import React from 'react';
import './App.css';
import pic from "./TJ.jpg";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#work">Work Experience</a></li>
              <li><a href="#contact">Contact Me</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="about">
  <div className="container">
    <div className="content">
      {/* <h2>About Me</h2> */}
      <h2 className="section-heading">About Me</h2>
      <div className="profile">
        <img src={pic} alt="" />
        <div className="profile-info">
          <h3>Thaneshowar joshi</h3>
          <p>Web Developer</p>
          <p>Hello, welcome to my portfolio. This portfolio contains my details description along with my experience and work that i have completed and you can contact me below</p>
        </div>
      </div>
    </div>
  </div>
</section>
          <section id="work">
  <div className="container">
    <div className="content">
      {/* <h2>Work Experience</h2> */}
      <h2 className="section-heading">Work Experience</h2>
      <div className="work-experience">
        <div className="experience-item blue">
          <h3>AI Virtual Mouse</h3>
          <p>We created this project during seventh semester. In this project we created a virtual mouse that uses webcam to operate mouse.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
        </div>
        <div className="experience-item green">
          <h3>zamil kebab loyalty points</h3>
          <p>I helped in this project with my fellow friend with ui/ux design and hosting.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
        </div>
        <div className="experience-item orange">
          <h3>Movie Recommendation system </h3>
          <p>I along with my couple of friend we created this system to recommend movie to user's.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="btn">Visit Website</a>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="contact">
  <div className="container">
    <div className="content">
      <div className="contact-info">
        {/* <h2>Contact Me</h2> */}
        <h2 className="section-heading">Contact Me</h2>
        <p><strong>Name:</strong> Thaneshowar Joshi</p>
        <p><strong>Email:</strong> ThaneshowarJoshi2022@gmail.com</p>
        <p><strong>Phone:</strong> 9867063462</p>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


        </main>
      </div>
    );
  }
}

export default App;
