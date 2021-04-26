/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import BookService from '../../services/BookService';

export default function bookFetch(api, method, _body = null) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(null);

  let service;
  if (api === 'Book') {
    service = BookService;
  }
  //console.log(`Method:${method}`);
  const fetchURL = async () => {
    let response;
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line no-console
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line no-console

    if (method === 'GET') {
      response = await service.getBooks();
    }
    if (response.error) {
      setError(response.error);
    }
    console.log(response);
    setData(response.data);

  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    fetchURL();
  }, []);
  return [data, error];
}
