//creating hooks 
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getTailorMovies } from '../redux/moviesSlice';
import { option } from '../utils/constant';
import { useEffect } from 'react';


export const useMovieByid = async (movieId) => {


    const dispatch = useDispatch()

    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, option);

                // console.log(res.data.results);

                const tailor = res?.data?.results?.filter((item) => {
                    return item.type === "Teaser";
                })

                dispatch(getTailorMovies(tailor.length > 0 ? tailor[0] : res.data.results[0]))

            } catch (error) {
                console.log(error)
            }
        }
        getMovieById()
    },[movieId])

}