import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageGlid.css'; 
import osImg1 from '../component/OsImages/os1.jpg';
import osImg2 from '../component/OsImages/os2.jpg';
import osImg3 from '../component/OsImages/os3.jpg';
import osImg4 from '../component/OsImages/os4.jpg';
import osImg5 from '../component/OsImages/os5.jpg';
import osImg6 from '../component/OsImages/os6.jpg';
import osImg7 from '../component/OsImages/os7.jpg';
import osImg8 from '../component/OsImages/os8.jpg';
import osImg9 from '../component/OsImages/os9.jpg';
import osImg10 from '../component/OsImages/os10.jpg';
import osImg11 from '../component/OsImages/os11.jpg';
import osImg12 from '../component/OsImages/os12.jpg';
import osImg13 from '../component/OsImages/os13.jpg';
import osImg14 from '../component/OsImages/os14.jpg';
import osImg15 from '../component/OsImages/os15.jpg';
import osImg16 from '../component/OsImages/os16.jpg';
import osImg17 from '../component/OsImages/os17.jpg';
import osImg18 from '../component/OsImages/os18.jpg';
import osImg19 from '../component/OsImages/os19.jpg';
import osImg20 from '../component/OsImages/os20.jpg';
import Footer from './footer';

function OsWallpapers() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    
    const images = [
        { src: osImg1, alt: "OS Image 1", downloadLink: osImg1 },
        { src: osImg2, alt: "OS Image 2", downloadLink: osImg2 },
        { src: osImg3, alt: "OS Image 3", downloadLink: osImg3 },
        { src: osImg4, alt: "OS Image 4", downloadLink: osImg4 },
        { src: osImg5, alt: "OS Image 5", downloadLink: osImg5 },
        { src: osImg6, alt: "OS Image 6", downloadLink: osImg6 },
        { src: osImg7, alt: "OS Image 7", downloadLink: osImg7 },
        { src: osImg8, alt: "OS Image 8", downloadLink: osImg8 },
        { src: osImg9, alt: "OS Image 9", downloadLink: osImg9 },
        { src: osImg10, alt: "OS Image 10", downloadLink: osImg10 },
        { src: osImg11, alt: "OS Image 11", downloadLink: osImg11 },
        { src: osImg12, alt: "OS Image 12", downloadLink: osImg12 },
        { src: osImg13, alt: "OS Image 13", downloadLink: osImg13 },
        { src: osImg14, alt: "OS Image 14", downloadLink: osImg14 },
        { src: osImg15, alt: "OS Image 15", downloadLink: osImg15 },
        { src: osImg16, alt: "OS Image 16", downloadLink: osImg16 },
        { src: osImg17, alt: "OS Image 17", downloadLink: osImg17 },
        { src: osImg18, alt: "OS Image 18", downloadLink: osImg18 },
        { src: osImg19, alt: "OS Image 19", downloadLink: osImg19 },
        { src: osImg20, alt: "OS Image 20", downloadLink: osImg20 }
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

export default OsWallpapers;
