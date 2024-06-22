import React, { useState } from 'react';

const Gallery = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const nextImage = () => {
        setSelectedIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === images.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const prevImage = () => {
        setSelectedIndex((prevIndex) => {
            if (prevIndex === null || prevIndex === 0) {
                return images.length - 1; 
            } else {
                return prevIndex - 1;
            }
        });
    };

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="image-container" onClick={() => openModal(index)} data-name={image.name}>
                        <img src={image.url} alt={image.name} className="image" />
                    </div>
                ))}
            </div>
            {selectedIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <button className="nav-button prev-button" onClick={prevImage}>Prev</button>
                        <img src={images[selectedIndex].url} alt="" className="modal-image" />
                        <button className="nav-button next-button" onClick={nextImage}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
