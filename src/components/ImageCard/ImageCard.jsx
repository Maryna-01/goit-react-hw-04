// src/components/ImageCard/ImageCard.jsx


function ImageCard({ image, onClick }) {
    return (
        <div onClick={onClick}>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
}

export default ImageCard;
