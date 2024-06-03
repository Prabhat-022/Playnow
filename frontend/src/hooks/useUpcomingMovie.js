//creating hooks 
import axios from 'axios'
import { options, upcoming_Moving } from '../utils/Constant'
import { useDispatch } from 'react-redux'
import { getUpcomingMovies } from '../redux/moviesSlice'

export const useUpcomingMovie = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(upcoming_Moving, options)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }

}