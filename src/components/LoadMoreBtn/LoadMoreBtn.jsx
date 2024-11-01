
import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
    return (
        <button onClick={onClick} className={styles.loadMoreButton} aria-label="Load more images">
            Load more
        </button>
    );
}

export default LoadMoreBtn;

