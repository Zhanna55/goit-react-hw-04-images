import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const { largeImageURL, tags } = image;
  return (
    <Overlay onClick={onBackDropClick}>
      <ModalContainer>
        <img src={largeImageURL} alt={tags} />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;
