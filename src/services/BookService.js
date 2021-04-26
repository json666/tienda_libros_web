import API from '../api/api';

const getBooks = async () => {
  const response = await API.get('/libros/todoslosLibros');
  if (response.error) {
    throw new Error('No se encontraron resultados');
  }
  return response;
};


const addBook = async (book) => {
  //uploadImage(image, user.img);
  const response = await API.post('/libros', book);
  if (response.error) {
    throw new Error('No se ha podido crear el Libro');
  }
  return response;
};
export default {
  getBooks,
  addBook
};

