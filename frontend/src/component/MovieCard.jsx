import React from 'react'
import { Poster_Url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getMovieName, getid, } from '../redux/moviesSlice';

const MovieCard = ({ posterPath, id, movie }) => {
  const dispatch = useDispatch()
  

  if (posterPath === null) return null;

  const handleClick = () => {
    dispatch(getid(id))
    dispatch(getMovieName(movie))
  }
  return (
    <div className='w-48 cursor-pointer pr-2 flex items-center justify-center' onClick={handleClick}>
      {/* <img src="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg" alt="" /> */}
      <img src={`${Poster_Url}/${posterPath}`} alt="" className='flex items-center justify-center'  />
    </div>
  )
}

export default MovieCard