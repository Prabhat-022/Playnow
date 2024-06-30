import axios from 'axios';
import React, { useState } from 'react'
import { Search_Movie_url, options } from '../utils/constant';
// import { Poster_Url } from '../utils/constant'
import Footer from './footer/Footer';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const SearchMovie = () => {
    const [inputs, setInputs] = useState("");
    const [searchData, setSearchData] = useState();
    
    // const id = useSelector(store => store.movie.id)
    const ids = useSelector((store) => store.movie.id)
    console.log('serchid', ids)

    const searchHandler = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.get(`${Search_Movie_url}${inputs}`, options)

            setSearchData(res.data.results);
            console.log("search title", res.data.results.title)
            console.log("search id", res.data.results.id)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='bg-black h-[100%]'>
                <div className="flex justify-center items-center flex-col">
                    <h1 className='text-3xl font-bold mb-4 mt-10 text-white'>Search Movie </h1>
                    <form action="" className=' ' onSubmit={searchHandler}>
                        <input type="text" value={inputs} onChange={(e) => { setInputs(e.target.value) }}
                            placeholder='Search Movie.....' className='px-4 py-2 ml-2 text-black outline-none border' />

                        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search</button>


                        <div className=" flex flex-col justify-center  mt-20 gap-5 bg-black mx-4"  >
                            <div className="flex items-start">
                                <h1 className='text-white text-start'> Search Results:<span className='text-red-700 font-bold'> {inputs.toLocaleUpperCase()}</span></h1>
                            </div>

                            <div className="">
                             {
                                ids && (   <VideoBackground movieId={ids} />)
                             }
                            </div>

                            <div className="flex flex-wrap">
                                {searchData &&
                                    searchData.map((data) => {
                                        return (
                                            <>
                                                {/* <img src={`${Poster_Url}/${data.poster_path}`} alt="" className='w-28 h-34 cursor-pointer' /> */}
                                                {/* <MovieCard posterPath={data.poster_path} /> */}
                                                <div className="mb-2">

                                                    <MovieCard
                                                        key={data.id}
                                                        id={data.id}
                                                        posterPath={data.poster_path}
                                                        movie={data}
  
                                                    />
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchMovie
