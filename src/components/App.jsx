import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import fetchImages from 'services/api';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Container, ErrorMessage } from './App.styled';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(null);
        const { hits, totalHits } = await fetchImages(query, page);
        const imgArr = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        if (query.trim() === '') {
          setError('You cannot search by empty field, try again.');
        } else if (hits.length === 0) {
          setError(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        } else {
          setImages(images => [...images, ...imgArr]);
          setTotalHits(totalHits);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  useEffect(() => {
    reset();
  }, [query]);

  const handleSearchFormSubmit = query => {
    setQuery(query);
  };
  const loadMore = () => {
    setPage(page => page + 1);
  };
  const reset = () => {
    setPage(1);
    setImages([]);
    setTotalHits(0);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSearchFormSubmit} />
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length < totalHits && (
        <Button type="button" label="Load more" changePage={loadMore} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

export default App;
