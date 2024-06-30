import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import Footer from './footer/Footer'

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie)
  // console.log(movie)

  
  return (
    <>
      <div className="bg-black mt-3">
        <div className='-mt-5 relative z-5'>
          <MovieList title={"Popular movie"} movies={movie.popularMoving} />
          <MovieList title={"Now Playing movie"} movies={movie.nowPlayingMovie} />
          <MovieList title={"Top Rated movie"} movies={movie.topRatedMovie} />
          <MovieList title={"Upcoming movie"} movies={movie.upcomingMoving} />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default MovieContainer
