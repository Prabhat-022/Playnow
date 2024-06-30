import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useUpcomingMovie } from '../hooks/useUpcomingMovie'
import { useNowPlayingMovie } from '../hooks/useNowPlayingMovie'
import { useTopRatedMovie } from '../hooks/useTopRatedMovie'
import { usePopularMovie } from '../hooks/usePopularMovie'
import SearchMovie from './SearchMovie'
import Home from './Home'

const Browse = () => {
  //Protected routes
  const user = useSelector((store) => store.app.user)
  const toggle = useSelector((store) => store.movie.toggle)
  const navigate = useNavigate();

  //my custome hooks
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  useEffect(() => {

    if (!user) {
      navigate("/")
    }
  }, [])

  return (
    <>
      <Header />
      <div className="">
        {
          toggle ?
            <SearchMovie /> : <>
             <Home/>
            </>
        }

      </div>
    </>
  )
}

export default Browse
