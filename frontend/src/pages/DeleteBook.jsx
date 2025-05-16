import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();
  
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('book deleted!', {variant: 'success'})
        navigate('/')
      })
      .catch(err => {
        setLoading(false);
        // alert('error happened, check console');
        enqueueSnackbar('error', {variant: 'error'})
        console.log(err)
      })
  }
  
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto w-[600px]">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full cursor-pointer hover:bg-red-600/50 hover:text-white/50" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook