import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { ImageItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };

  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };

  render() {
    const { item } = this.props;
    const { webformatURL, tags } = item;
    return (
      <ImageItem>
        <Image onClick={this.onModal} src={webformatURL} alt={tags} />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </ImageItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
export default ImageGalleryItem;
