// src/components/ImageGallery/ImageGallery.jsx

import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) {
    return (
        <ul>
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={() => onImageClick(image)} />
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;
