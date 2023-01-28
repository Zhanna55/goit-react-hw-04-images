const API_KEY = '31907236-eb812238183566cc0aa91bf3c';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page) {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
export default fetchImages;
