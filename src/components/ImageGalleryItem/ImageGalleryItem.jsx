import { Component } from 'react';
import Modal from 'components/Modal/Modal';

// const ImageGalleryItem = ({ item, showModal }) => {
//   return (
//     <a href={item.webformatURL} onClick={showModal}>
//       <li>
//         <img src={item.webformatURL} alt={item.tags} />
//       </li>
//     </a>
//   );
// };
class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li>
        <img onClick={this.onModal} src={webformatURL} alt="img" />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}
export default ImageGalleryItem;
