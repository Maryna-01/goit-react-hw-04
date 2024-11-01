import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ imageUrl, onClose }) {
    return (
        <Modal
            isOpen={!!imageUrl}
            onRequestClose={onClose}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <div onClick={onClose}>
                <img src={imageUrl} alt="Large view" className={styles.modalImage} />
            </div>
        </Modal>
    );
}

export default ImageModal;


