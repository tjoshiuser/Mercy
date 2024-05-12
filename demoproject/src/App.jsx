import "./App.css";

import logo from "./logo1.jpg";
import brandi from "./amazon.png";
import brandicon from "./flipkart.png";
import shoe from "./shoe_image.png";
const App = () => {
  return (
    <div>
         <nav>
         <div className = "logo">
          <img src = {logo} alt="logo" />
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li> 
          </ul>
          <button>login</button>
        </nav>

        <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Categeory</button>
        </div>
        <div className="Shopping">
            <p>Also available on</p>
        </div>
        <div className="brandicons">
            <img src={brandi} alt="amazon-logo" />
            <img src={brandicon} alt="flipkart-logo" />

        </div>
       <div className="shoes">
        <img src={shoe} alt="shoes-image"/>
       </div>   
</main>
    </div>
  );
};

export default App;