import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageGlid.css'; 
import Footer from './footer';

import nImg1 from '../component/NatureImages/n1.jpg.jpg';
import nImg2 from '../component/NatureImages/n2.jpg.jpg';
import nImg3 from '../component/NatureImages/n3.jpg.jpg';
import nImg4 from '../component/NatureImages/n4.jpg.jpg';
import nImg5 from '../component/NatureImages/n5.jpg.jpg';
import nImg6 from '../component/NatureImages/n6.jpg.jpg';
import nImg7 from '../component/NatureImages/n7.jpg.jpg';
import nImg8 from '../component/NatureImages/n8.jpg.jpg';
import nImg9 from '../component/NatureImages/n9.jpg.jpg';
import nImg10 from '../component/NatureImages/n10.jpg.jpg';
import nImg11 from '../component/NatureImages/n11.jpg.jpg';
import nImg12 from '../component/NatureImages/n12.jpg.jpg';
import nImg13 from '../component/NatureImages/n13.jpg.jpg';
import nImg14 from '../component/NatureImages/n14.jpg.jpg';
import nImg15 from '../component/NatureImages/n15.jpg.jpg';
import nImg16 from '../component/NatureImages/n16.jpg.jpg';
import nImg17 from '../component/NatureImages/n17.jpg.jpg';
import nImg18 from '../component/NatureImages/n18.jpg.jpg';
import nImg19 from '../component/NatureImages/n19.jpg.jpg';
import nImg20 from '../component/NatureImages/n20.jpg.jpg';
import nImg21 from '../component/NatureImages/n21.jpg.jpg';
import nImg22 from '../component/NatureImages/n22.jpg.jpg';
import nImg23 from '../component/NatureImages/n23.jpg.jpg';
import nImg24 from '../component/NatureImages/n24.jpg.jpg';
import nImg25 from '../component/NatureImages/n25.jpg.jpg';
import nImg26 from '../component/NatureImages/n26.jpg.jpg';
import nImg27 from '../component/NatureImages/n27.jpg.jpg';
import nImg28 from '../component/NatureImages/n28.jpg.jpg';
import nImg29 from '../component/NatureImages/n29.jpg.jpg';
import nImg30 from '../component/NatureImages/n30.jpg.jpg';
import nImg31 from '../component/NatureImages/n31.jpg.jpg';
import nImg32 from '../component/NatureImages/n32.jpg.jpg';
import nImg33 from '../component/NatureImages/n33.jpg.jpg';
import nImg34 from '../component/NatureImages/n34.jpg.jpg';
import nImg35 from '../component/NatureImages/n35.jpg.jpg';
import nImg36 from '../component/NatureImages/n36.jpg.jpg';


function NatureWallpapers() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

  
    const images = [
        { src: nImg1, alt: "Nature Image 1", downloadLink: nImg1 },
        { src: nImg2, alt: "Nature Image 2", downloadLink: nImg2 },
        { src: nImg3, alt: "Nature Image 3", downloadLink: nImg3 },
        { src: nImg4, alt: "Nature Image 4", downloadLink: nImg4 },
        { src: nImg5, alt: "Nature Image 5", downloadLink: nImg5 },
        { src: nImg6, alt: "Nature Image 6", downloadLink: nImg6 },
        { src: nImg7, alt: "Nature Image 7", downloadLink: nImg7 },
        { src: nImg8, alt: "Nature Image 8", downloadLink: nImg8 },
        { src: nImg9, alt: "Nature Image 9", downloadLink: nImg9 },
        { src: nImg10, alt: "Nature Image 10", downloadLink: nImg10 },
        { src: nImg11, alt: "Nature Image 11", downloadLink: nImg11 },
        { src: nImg12, alt: "Nature Image 12", downloadLink: nImg12 },
        { src: nImg13, alt: "Nature Image 13", downloadLink: nImg13 },
        { src: nImg14, alt: "Nature Image 14", downloadLink: nImg14 },
        { src: nImg15, alt: "Nature Image 15", downloadLink: nImg15 },
        { src: nImg16, alt: "Nature Image 16", downloadLink: nImg16 },
        { src: nImg17, alt: "Nature Image 17", downloadLink: nImg17 },
        { src: nImg18, alt: "Nature Image 18", downloadLink: nImg18 },
        { src: nImg19, alt: "Nature Image 19", downloadLink: nImg19 },
        { src: nImg20, alt: "Nature Image 20", downloadLink: nImg20 },
        { src: nImg21, alt: "Nature Image 21", downloadLink: nImg21 },
        { src: nImg22, alt: "Nature Image 22", downloadLink: nImg22 },
        { src: nImg23, alt: "Nature Image 23", downloadLink: nImg23 },
        { src: nImg24, alt: "Nature Image 24", downloadLink: nImg24 },
        { src: nImg25, alt: "Nature Image 25", downloadLink: nImg25 },
        { src: nImg26, alt: "Nature Image 26", downloadLink: nImg26 },
        { src: nImg27, alt: "Nature Image 27", downloadLink: nImg27 },
        { src: nImg28, alt: "Nature Image 28", downloadLink: nImg28 },
        { src: nImg29, alt: "Nature Image 29", downloadLink: nImg29 },
        { src: nImg30, alt: "Nature Image 30", downloadLink: nImg30 },
        { src: nImg31, alt: "Nature Image 31", downloadLink: nImg31 },
        { src: nImg32, alt: "Nature Image 32", downloadLink: nImg32 },
        { src: nImg33, alt: "Nature Image 33", downloadLink: nImg33 },
        { src: nImg34, alt: "Nature Image 34", downloadLink: nImg34 },
        { src: nImg35, alt: "Nature Image 35", downloadLink: nImg35 },
        { src: nImg36, alt: "Nature Image 36", downloadLink: nImg36 }
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
                    <div className="col-md-3" key={index}> {/* 4 cards per row */}
                        <div className="card image-card" onClick={() => openModal(image.src)}> {/* Open modal on click */}
                            <img src={image.src} className="card-img-top" alt={image.alt} />
                            <div className="card-body text-center">
                                <a href={image.downloadLink} download className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying the image */}
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

export default NatureWallpapers;
