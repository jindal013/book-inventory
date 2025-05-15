import React, { useState, useEffect } from 'react'

const API_BASE_URL = 'http://localhost:5555/books'

const App = () => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookId, setBookId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const endpoint = query 
      ? `${API_BASE_URL}/${encodeURIComponent(query)}`
      : `${API_BASE_URL}`

      const response = await fetch(endpoint);

      if (!response.ok){
        throw new Error('failed to fetch books!');
      }

      const data = await response.json();
      setBooks(data.data || []);
    } 
    catch (error) {
      console.log(error);
      setErrorMessage('error fetching books!');
    } 
    finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooks(bookId);
  }, []);

  return (
    <div>
      <div className='text-3xl text-purple-800 mt-10 ml-10'>Books:</div>

      <div className="mt-10 text-2xl text-black ml-10">
        {isLoading ? (
          <p className="text-bluie-300">loading, chill.</p>
        ) : errorMessage ? (
          <p className='text-red-500'>{errorMessage}</p>
        ) : (
          <ul>
            {books.map(book => (
              <div key={book._id} className="flex flex-column">
                <p>{book.title}</p>
              </div>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default App