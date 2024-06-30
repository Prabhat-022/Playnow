//creating hooks 
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getTopRatedMovies } from '../redux/moviesSlice'
import { options, top_rated_Moving } from '../utils/constant'

export const useTopRatedMovie = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(top_rated_Moving, options)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }

}