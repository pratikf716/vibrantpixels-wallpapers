import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import img1 from '../component/1.jpg'
import img2 from '../component/2.jpg'
import img3 from '../component/OsImages/os7.jpg'
import ImageGrid from './ImageGlid';
import Footer from './footer';


function Home() {
  return (
    <div className="container-fluid px-0">
      <div id="WallpaperCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <Link to="/nature-wallpapers">
              <img src={img1} className="d-block w-100 img-fluid carousel-img" alt="Nature Wallpapers" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nature Wallpapers</h5>
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <Link to="/cars-wallpapers">
              <img src={img2} className="d-block w-100 img-fluid carousel-img" alt="Cars Wallpapers" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cars Wallpapers</h5>
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <Link to="/os-wallpapers">
              <img src={img3} className="d-block w-100 img-fluid carousel-img" alt="Bike Wallpapers" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Os Wallpapers</h5>
              </div>
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#WallpaperCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#WallpaperCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ImageGrid/>
      <Footer/>
      
    </div>
  );
}

export default Home;

