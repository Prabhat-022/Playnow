//creating hooks 
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getNowPlayingMovies } from '../redux/moviesSlice'
import { Now_Playing_Moving, options } from '../utils/constant'

export const useNowPlayingMovie = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Now_Playing_Moving, options)
        dispatch(getNowPlayingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }


}