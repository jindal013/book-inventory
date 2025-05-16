import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import BackButton from '../components/BackButton.jsx'
import Spinner from '../components/Spinner.jsx';
import { BookInfoCard } from '../components/BookInfo.jsx';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error coming from showbook.jsx')
        console.log(err);
        setLoading(false);
      })
  }, [])
  
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (    
        <BookInfoCard book={book}/>
      )}

    </div>
  )
}

export default ShowBook