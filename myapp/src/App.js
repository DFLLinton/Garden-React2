import './App.css';
import { useState } from "react";
import image1 from "./images/image1.jpeg"; 
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.png"; 
import image6 from "./images/image6.jpg"; 


function App() {

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

const [image, setImage] = useState(images[0]); 
const [currentIndex, setCurrentIndex] = useState(1); 
const [displayValue, setDisplayValue] = useState('none')

function nextImageSlide() {
  setCurrentIndex(prevIndex => {
    let newIndex = prevIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setImage(images[newIndex]);
    return newIndex;
  });
}

function previousImageSlide() {
  setCurrentIndex(prevIndex => {
    let newIndex = prevIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setImage(images[newIndex]);
    return newIndex;
  });
}
function displayContents(content) {
  setDisplayValue(content);
}

  
  return (
    <div id="entire" style={{ 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
    <nav id="navbar"> 
    <ul>
        <li className="navoption" id="title" onClick={() => displayContents('home')}>Romana Gardens</li>
        <li className="navoption" id="nottitle" onClick={() => displayContents('contact')}>Contact</li>
        <li className="navoption" id="nottitle" onClick={() => displayContents('about')}>About</li>
    </ul>
</nav>
<div id="aboutpara" style={{ display: displayValue === 'about' ? 'block' : 'none' }}>
    Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>
<div id="contactpara" style={{ display: displayValue === 'contact' ? 'block' : 'none' }}>
    Please get in touch for more information.<br/>
    You can contact us by <br/>
    mobile: 020854894258 <br/>
    or via email: gardening@email.com<br/>
</div>

<footer>
    <p>Images: <a id="arrow" onClick={previousImageSlide}>&lt;</a> <span id="arrow" onClick={nextImageSlide}>&gt;</span></p>
</footer>
</div>
  );
}

export default App;
