/* eslint-disable array-callback-return */
import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className='px-8'>
        <h1 className='text-white text-start text-xl mb-2 mt-5'>{title}</h1>
        <div className="flex overflow-x-auto no-scrollbar cursor-pointer items-center justify-center">
          <div className="flex h-full">
            {movies &&
              movies.map((movie) => {
                return (
                  <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} movie={movie}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieList
