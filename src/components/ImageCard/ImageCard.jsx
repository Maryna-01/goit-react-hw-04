import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
    return (
        <div className={styles.imageCard}>
            <img
                src={image.urls.small}
                alt={image.alt_description || 'Image'}
                className={styles.image}
                onClick={onClick}
            />
        </div>
    );
}

export default ImageCard;


