import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ImageList>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ImageGallery;
