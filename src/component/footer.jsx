import React from 'react';
import { FaChevronCircleRight, FaPhone, FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaHeart,FaBuffer  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
          <h3>VibrantPixels</h3>
          <p>Thank you for visiting Our website. <br /><br /> Keep Rising 🚀.</p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <Link className="navbar-brand" to="/" onClick={scrollToTop}><FaChevronCircleRight />   Home</Link> 
          <Link className="nav-link" to="/nature-wallpapers" style={{ fontWeight: "bolder" }}><FaChevronCircleRight />  Nature Wallpapers</Link>
          <Link className="nav-link" to="/cars-wallpapers" style={{fontWeight:"bolder"}}><FaChevronCircleRight />  Cars | Bike Wallpapers</Link>
        <Link className="nav-link" to="/bike-wallpapers" style={{fontWeight:"bolder"}}> <FaChevronCircleRight />  Gaming Wallpapers</Link>
        <Link  className="btn btn-outline-danger" to="/login" style={{width:"100px", border:"none"}}><FaChevronCircleRight />    Login</Link>
          
        </div>

        <div className="box">
          <h3><FaBuffer />  About</h3>
          <p> About Us</p>
          <p> FaQ</p>
          <p>Privacy Policy</p>
          <div className="share">
            <a href="https://www.linkedin.com/in/pratik-futane-43a39031a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/pratikf716" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:pratikfutane19@gmail.com" aria-label="Mail" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            
          
          </div>
        </div>
      </div>

      <h1 className="credit">Designed with <FaHeart className="pulse" /> by <a href="#" target="_blank" rel="noopener noreferrer">Pratik Futane</a>  © 2024 VibrantPixels</h1>
    </section>
  );
}

export default Footer;
