import React from 'react'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  // const movie = useSelector((store) => store.movie?.nowPlayingMovie);
  const movien = useSelector((store) => store.movie?.movieName);
  // console.log("maincontainer movie", movien)

  const id = useSelector((store) => store.movie.id);
  // console.log("maincontainer id", id)

  if (!movien) return;  //early return in react

  const { overview, title } = movien;

  return (
    <>
      <div className="top-10 ">
        <Videotitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </>
  )
}

export default MainContainer
