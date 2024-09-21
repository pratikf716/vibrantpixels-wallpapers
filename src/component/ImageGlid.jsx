import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageGlid.css'; 
import img1 from '../component/HomeImages/h1.jpg';
import img2 from '../component/HomeImages/h2.jpg';
import img3 from '../component/HomeImages/h3.png';
import img4 from '../component/HomeImages/h4.png';
import img5 from '../component/HomeImages/h5.png';
import img6 from '../component/HomeImages/h6.png';
import img7 from '../component/HomeImages/h7.jpg';
import img8 from '../component/HomeImages/h8.png';
import img9 from '../component/HomeImages/h9.jpg';
import img10 from '../component/HomeImages/h10.webp';
import img11 from '../component/HomeImages/h11.jpg';
import img12 from '../component/HomeImages/h12.jpg';
import img13 from '../component/HomeImages/h13.png';
import img14 from '../component/HomeImages/h14.png';
import img15 from '../component/HomeImages/h15.png';
import img16 from '../component/HomeImages/h16.jpg';
import img17 from '../component/HomeImages/h17.png';
import img18 from '../component/HomeImages/h18.jpg';
import img19 from '../component/HomeImages/h19.png';
import img20 from '../component/HomeImages/h20.png';

function ImageGrid() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const images = [
        { src: img1, alt: "Image 1", downloadLink: img1 },
        { src: img2, alt: "Image 2", downloadLink: img2 },
        { src: img3, alt: "Image 3", downloadLink: img3 },
        { src: img4, alt: "Image 4", downloadLink: img4 },
        { src: img5, alt: "Image 5", downloadLink: img5 },
        { src: img6, alt: "Image 6", downloadLink: img6 },
        { src: img7, alt: "Image 7", downloadLink: img7 },
        { src: img8, alt: "Image 8", downloadLink: img8 },
        { src: img9, alt: "Image 9", downloadLink: img9 },
        { src: img10, alt: "Image 10", downloadLink: img10 },
        { src: img11, alt: "Image 11", downloadLink: img11 },
        { src: img12, alt: "Image 12", downloadLink: img12 },
        { src: img13, alt: "Image 13", downloadLink: img13 },
        { src: img14, alt: "Image 14", downloadLink: img14 },
        { src: img15, alt: "Image 15", downloadLink: img15 },
        { src: img16, alt: "Image 16", downloadLink: img16 },
        { src: img17, alt: "Image 17", downloadLink: img17 },
        { src: img18, alt: "Image 18", downloadLink: img18 },
        { src: img19, alt: "Image 19", downloadLink: img19 },
        { src: img20, alt: "Image 20", downloadLink: img20 }
    ];

    const isLoggedIn = () => {
        return localStorage.getItem('authToken'); 
    };

   
    const handleDownload = (e, downloadLink) => {
        if (!isLoggedIn()) {
            e.preventDefault(); // Prevent download
            alert('Please log in to download images.');
            navigate('/login'); // Redirect to login page
        }
    };

  
    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

   
    const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };

    return (
        <div className="container-fluid my-4"> {/* Full width outer div */}
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-3" key={index}> {/* 4 cards per row */}
                        <div className="card image-card" onClick={() => openModal(image.src)}> {/* Open modal on click */}
                            <img src={image.src} className="card-img-top" alt={image.alt} />
                            <div className="card-body text-center">
                                <a href={image.downloadLink} download className="btn btn-primary" onClick={(e) => handleDownload(e, image.downloadLink)}>
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           
            {showModal && (
                <div className="custom-modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected" className="modal-img" />
                        <a href={selectedImage} download className="btn btn-primary download-btn" onClick={(e) => handleDownload(e, selectedImage)}>
                            Download Image
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGrid;
