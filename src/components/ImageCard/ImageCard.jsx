import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
    return (
        <div onClick={onClick} className={styles.imageCard}>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
}

export default ImageCard;


