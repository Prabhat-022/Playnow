import React from 'react'
import { useMovieByid } from '../hooks/useMovieById'
import { useSelector } from 'react-redux';


const VideoBackground = ({ movieId }) => {

    const tailorMovie = useSelector((store) => store.movie.tailorMovie)
    useMovieByid(movieId)

    return (
        <div>
            <div className="w-screen">
                {
                    tailorMovie ? <iframe className='w-screen aspect-video h-[100vh]'
                        src={`https://www.youtube.com/embed/${tailorMovie.key}?si=at7_N94j7Sm0ZSlC&autoplay=1&mute=1`} title="netflix" frameborder="0" allowfullscreen></iframe> : " "
                }
            </div>
        </div>
    )
}

export default VideoBackground
