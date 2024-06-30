//creating hooks 
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getPopularMovies } from '../redux/moviesSlice'
import { options, popular_Moving } from '../utils/constant'

export const usePopularMovie = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(popular_Moving, options)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }

}