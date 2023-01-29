import { Component } from 'react';
// import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeModal);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeModal);
//   }

//   closeModal = ({ target, currentTarget, code }) => {
//     if (target === currentTarget || code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div onClick={this.closeModal}>
//         <div>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.image;
    console.log(this.props.image);
    return (
      <div onClick={this.onBackDropClick}>
        <div>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
export default Modal;
