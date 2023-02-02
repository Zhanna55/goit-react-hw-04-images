import { Component } from 'react';
import SearchBar from './SearchBar';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Container, ErrorMessage } from './App.styled';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.reset();
      this.getImages();
    }
    if (prevState.page !== page) {
      this.getImages();
    }
  }

  async getImages() {
    try {
      this.setState({ loading: true, error: null });
      const { query, page } = this.state;
      const { hits, totalHits } = await fetchImages(query, page);
      const imgArr = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
        return { id, largeImageURL, webformatURL, tags };
      });

      if (query.trim() === '') {
        this.setState({
          error: 'You cannot search by empty field, try again.',
        });
      } else if (hits.length === 0) {
        this.setState({
          error:
            'Sorry, there are no images matching your search query. Please try again.',
        });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...imgArr],
          totalHits,
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({ query });
  };
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  reset = () => {
    this.setState({ page: 1, images: [], totalHits: 0 });
  };

  render() {
    const { images, loading, error, totalHits } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {images.length > 0 && <ImageGallery items={images} />}
        {images.length < totalHits && (
          <Button type="button" label="Load more" changePage={this.loadMore} />
        )}
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
}

export default App;
