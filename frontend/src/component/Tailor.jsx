/* eslint-disable react/no-unescaped-entities */
// import homeimg from './../assets/top_img.jpg';
import { UilPlay, UilInfoCircle } from '@iconscout/react-unicons'
import BackgroundTailor from './BackgroundTailor';
import { useSelector } from 'react-redux';
import { useMovieByid } from '../hooks/useMovieByid';


const Tailor = () => {
       
    const movie = useSelector(store => store.movie.nowPlayingMovie);

    console.log(movie);

    const { overview, id, title } = movie[1];
    useMovieByid(id);

    // if (!movie) return; // early return in react


    return (
        <>
            <div className="">
                <div className="w-full ">

                    <BackgroundTailor id={id} />

                    <div className="absolute bottom-44 ml-10">

                        <h1 className='text-4xl font-bold mb-2'>{title}

                        </h1>

                        <p className='text-xl w-1/3'>  {overview} </p>

                        <div className="flex mx-3 my-4">
                            <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded flex mr-3">
                                <UilPlay className="" />Play
                            </button>
                            <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded flex">
                                <UilInfoCircle />More Info
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Tailor;
