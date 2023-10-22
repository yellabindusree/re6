import React, { useEffect, useState } from 'react'; 
import './App.css';
import abcImage from "./abc.jpeg"; 

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
      if (window.scrollY > 0) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="App">
      <header>
        <div className="user">
          <img src={abcImage} alt="Bindusree" />
          <h3 className="name">Bindusree</h3>
        </div>
        <nav className="navbar">
          <ul className="nav">
            <li className='navlink'><a href="#home">HOME</a></li>
            <li className='navlink'><a href="#about">ABOUT</a></li>
            <li className='navlink'><a href="#education">EDUCATION</a></li>
            <li className='navlink'><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>

      <section className="home" id="home">
        <h3>HELLO!!</h3>
        <h1>This is <span>Bindusree</span></h1>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> <span>about</span> me </h1>
        <div className="row">
          <div className="info">
            <h3> <span> Name : </span> Bindusree </h3>
            <h3> <span> Qualification : </span> B.Tech(pursuing) </h3>
            <h3> <span> Skills: </span> Java,HTML,BS,REACT </h3>
            <h3> <span> Address</span> Amaravathi ,AndhraPradesh</h3>
            <h3> <span> Hobbies: </span> Arts,Travelling </h3>
            <h3> <span> Language : </span> Telugu, Hindi, English </h3>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading"> Education <span>Details</span> </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018-2019</span>
            <h3>SSC</h3>
            <p style={{ fontSize: '20px' }}>Xyz school</p>
            <p style={{ fontSize: '20px' }}>Points:ab</p>
            
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2019-2021</span>
            <h3>Intermediate</h3>
            <p style={{ fontSize: '20px' }}>xyz collage</p>
            <p style={{ fontSize: '20px' }}>Marks:abc</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021-2025</span>
            <h3>B.Tech</h3>
            <h4> </h4>
            <p style={{ fontSize: '20px' }}>VIT AP University</p>
            <p style={{ fontSize: '20px' }}>GPA:a.b</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> me </h1>
        <div className="row">
          <div className="content">
            <h3 className="title">contact info</h3>
            <div className="info">
              <h3> <i className="fas fa-envelope"></i> abc.com</h3>
              <h3> <i className="fas fa-phone"></i> 1234567890 </h3>
              <h3> <i className="fas fa-map-marker-alt"></i> linkdin:abcd </h3>
            </div>
          </div>
        </div>
      </section>

      {showTopButton && (
        <a href="#home" className="top" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={abcImage} alt="" />
        </a>
      )}
    </div>
  );
}

export default App;
