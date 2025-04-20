// import { useMovieByid } from '../hooks/useMovieById'
// import { useSelector } from 'react-redux';
// // import "node_modules/video-react/dist/video-react.css";


// const VideoBackground = ({ movieId }) => {

//     const tailorMovie = useSelector((store) => store.movie.tailorMovie)
//     useMovieByid(movieId)

//     return (
//         <>
//             <div className="w-full h-[80vh] px-8  bg-black">
//                 <div className="w-full h-full mb-4">
//                     {
//                         tailorMovie ?
//                             <iframe className='w-full h-full'
//                                 src={`https://www.youtube.com/embed/${tailorMovie.key}?si=at7_N94j7Sm0ZSlC&autoplay=1&mute=1`} title="netflix" frameborder="0" allowfullscreen>

//                             </iframe> : " "
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }

// export default VideoBackground



import { useEffect, useRef, useState } from 'react';
import { useMovieByid } from '../hooks/useMovieById';
import { useSelector } from 'react-redux';
import { FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";

const VideoBackground = ({ movieId }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const tailorMovie = useSelector((store) => store.movie.tailorMovie);
    useMovieByid(movieId);

    useEffect(() => {
        if (tailorMovie?.key && !playerRef.current) {
            playerRef.current = new window.YT.Player('youtube-player', {
                videoId: tailorMovie.key,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    rel: 0,
                    modestbranding: 1
                },
                events: {
                    onReady: () => {
                        setDuration(playerRef.current.getDuration());
                    },
                    onStateChange: (event) => {
                        setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
                    }
                }
            });
        }
    }, [tailorMovie]);

    const togglePlayPause = () => {
        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value);
        setVolume(newVolume);
        playerRef.current.setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (isMuted) {
            playerRef.current.unMute();
            setVolume(100);
        } else {
            playerRef.current.mute();
            setVolume(0);
        }
        setIsMuted(!isMuted);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="relative w-full h-[80vh] bg-black group">
            <div id="youtube-player" className="w-full h-full"></div>

            {/* Video Overlay Controls */}
            <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">

                {/* Timeline */}
                <div className="px-4 pb-2">
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-sm">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={(e) => {
                                const time = parseInt(e.target.value);
                                setCurrentTime(time);
                                playerRef.current.seekTo(time, true);
                            }}
                            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm">{formatTime(duration)}</span>
                    </div>
                </div>


                {/* Control Bar */}
                <div className="flex items-center justify-between px-4 pb-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={togglePlayPause}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {isPlaying ? (
                                <IoPause className="w-8 h-8" />
                            ) : (
                                <FaPlay className="w-8 h-8" />
                            )}
                        </button>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleMute}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                {isMuted ? (
                                    <FaVolumeXmark className="w-6 h-6" />
                                ) : (
                                    <FaVolumeUp className="w-6 h-6" />
                                )}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoBackground;