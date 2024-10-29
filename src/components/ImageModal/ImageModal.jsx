// src/components/ImageModal/ImageModal.jsx

import Modal from 'react-modal';

Modal.setAppElement('#root'); // Встановіть root-елемент для модального вікна

function ImageModal({ imageUrl, onClose }) {
    return (
        <Modal isOpen={!!imageUrl} onRequestClose={onClose}>
            <div onClick={onClose} style={{ cursor: 'pointer', backgroundColor: 'rgba(0,0,0,0.8)', padding: '20px' }}>
                <img src={imageUrl} alt="Large view" style={{ width: '100%', height: 'auto' }} />
            </div>
        </Modal>
    );
}

export default ImageModal;
