import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    showModal: false,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages();
    }
  }

  async getImages() {
    // try {
    // this.setState({ loading: true });
    const { query, page } = this.state;
    const { hits } = await fetchImages(query, page);
    const imgArr = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
      return { id, largeImageURL, webformatURL, tags };
    });
    this.setState(prevState => ({ images: [...prevState.images, ...imgArr] }));
    console.log(this.state.images);
  }

  handleSearchFormSubmit = query => {
    this.setState({ query });
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showModal = ({ url, alt }) => {
    this.setState({
      largeImage: {
        url,
        alt,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImage: null,
    });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery items={this.state.images} />
        <Modal onClose={this.closeModal}>
          <img src={this.largeImageData.url} alt={this.largeImageData.alt} />
        </Modal>
        <Button type="button" label="Load more" changePage={this.loadMore} />
        <Loader />
      </div>
    );
  }
}

export default App;
