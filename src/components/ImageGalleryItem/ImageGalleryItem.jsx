// import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';
import { useModal } from './../../hooks/useModal';

const ImageGalleryItem = ({ item }) => {
  // const [shownModal, setShownModal] = useState(false);
  // const onModal = () => {
  //   setShownModal(shownModal => !shownModal);
  // };
  const { isModalOpen, closeModal, openModal } = useModal();
  const { webformatURL, tags } = item;

  return (
    <ImageItem>
      <Image onClick={openModal} src={webformatURL} alt={tags} />
      {isModalOpen && <Modal onClose={closeModal} image={item} />}
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
export default ImageGalleryItem;
