import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageGlid.css'; 
import cImg1 from '../component/CarsImages/c1.jpg';
import cImg2 from '../component/CarsImages/c2.jpg';
import cImg3 from '../component/CarsImages/c3.jpg';
import cImg4 from '../component/CarsImages/c4.jpg';
import cImg5 from '../component/CarsImages/c5.jpg';
import cImg6 from '../component/CarsImages/c6.jpg';
import cImg7 from '../component/CarsImages/c7.jpg';
import cImg8 from '../component/CarsImages/c8.jpg';
import cImg9 from '../component/CarsImages/c9.jpg';
import cImg10 from '../component/CarsImages/c10.jpg';
import cImg11 from '../component/CarsImages/c11.jpg';
import cImg12 from '../component/CarsImages/c12.jpg';
import cImg13 from '../component/CarsImages/c13.jpg';
import cImg14 from '../component/CarsImages/c14.jpg';
import cImg15 from '../component/CarsImages/c15.jpg';
import cImg16 from '../component/CarsImages/c16.jpg';
import cImg17 from '../component/CarsImages/c17.jpg';
import cImg18 from '../component/CarsImages/c18.jpg';
import cImg19 from '../component/CarsImages/c19.jpg';
import cImg20 from '../component/CarsImages/c20.jpg';
import Footer from './footer';

function CarsWallpapers() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    
    const images = [
        { src: cImg1, alt: "Car Image 1", downloadLink: cImg1 },
        { src: cImg2, alt: "Car Image 2", downloadLink: cImg2 },
        { src: cImg3, alt: "Car Image 3", downloadLink: cImg3 },
        { src: cImg4, alt: "Car Image 4", downloadLink: cImg4 },
        { src: cImg5, alt: "Car Image 5", downloadLink: cImg5 },
        { src: cImg6, alt: "Car Image 6", downloadLink: cImg6 },
        { src: cImg7, alt: "Car Image 7", downloadLink: cImg7 },
        { src: cImg8, alt: "Car Image 8", downloadLink: cImg8 },
        { src: cImg9, alt: "Car Image 9", downloadLink: cImg9 },
        { src: cImg10, alt: "Car Image 10", downloadLink: cImg10 },
        { src: cImg11, alt: "Car Image 11", downloadLink: cImg11 },
        { src: cImg12, alt: "Car Image 12", downloadLink: cImg12 },
        { src: cImg13, alt: "Car Image 13", downloadLink: cImg13 },
        { src: cImg14, alt: "Car Image 14", downloadLink: cImg14 },
        { src: cImg15, alt: "Car Image 15", downloadLink: cImg15 },
        { src: cImg16, alt: "Car Image 16", downloadLink: cImg16 },
        { src: cImg17, alt: "Car Image 17", downloadLink: cImg17 },
        { src: cImg18, alt: "Car Image 18", downloadLink: cImg18 },
        { src: cImg19, alt: "Car Image 19", downloadLink: cImg19 },
        { src: cImg20, alt: "Car Image 20", downloadLink: cImg20 }
    ];

   
    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

  
    const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };

    return (
      <>
        <div className="container-fluid my-4">
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card image-card" onClick={() => openModal(image.src)}>
                            <img src={image.src} className="card-img-top" alt={image.alt} />
                            <div className="card-body text-center">
                                <a href={image.downloadLink} download className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           
            {showModal && (
                <div className="custom-modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected" className="modal-img" />
                        <a href={selectedImage} download className="btn btn-primary download-btn">Download Image</a>
                    </div>
                </div>
            )}
        </div>

        <Footer/>
        </>
    );
}

export default CarsWallpapers;
