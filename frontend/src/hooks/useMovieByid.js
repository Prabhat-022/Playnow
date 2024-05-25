// //creating hooks 
import axios from 'axios'
import { options } from '../utils/Constant'
import { useDispatch } from 'react-redux';
import { getTailorMovies } from '../redux/moviesSlice';


export const useMovieByid = async (movieId) => {

    console.log(movieId)
    const dispatch = useDispatch()
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        console.log(res.data.results);

        const tailor = res?.data?.results?.filter((item) => {
            return item.type === "Teaser";
        })

        dispatch(getTailorMovies(tailor.length > 0 ? tailor[0] : res.data.results[0]))

    } catch (error) {
        console.log(error)
    }

}


// import { useEffect } from 'react';
// import axios from 'axios';
// import { options } from '../utils/Constant';
// import { useDispatch } from 'react-redux';
// import { getTailorMovies } from '../redux/moviesSlice';

// export const useMovieByid = (movieId) => {

//     console.log("movieId",movieId)
    
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchMovie = async () => {
//             try {
//                 const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
//                 // const res = await axios.get(`https://api.themoviedb.org/3/movie/573435/videos`, options);

//                 console.log("movieid response", res);
//                 console.log("movieid response", res.data.results);

//                 const tailor = res?.data?.results?.filter((item) => item.type === "Teaser");

//                 dispatch(getTailorMovies(tailor.length > 0 ? tailor[0] : res.data.results[0]));

//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         if (movieId) {
//             fetchMovie();
//         }

//     }, [movieId, dispatch]);
// };


// import { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { getTailorMovies } from '../redux/moviesSlice';
// import { options } from '../utils/Constant';

// export const useMovieById = (movieId) => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchMovie = async () => {
//             try {
//                 const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

//                 if (res && res.data && res.data.results) {
//                     const tailor = res.data.results.filter((item) => item.type === "Teaser");
//                     const movieData = tailor.length > 0 ? tailor[0] : res.data.results[0];
//                     dispatch(getTailorMovies(movieData));
//                 }
//             } catch (error) {
//                 console.error('Failed to fetch movie data:', error);
//             }
//         };

//         if (movieId) {
//             fetchMovie();
//         }
//     }, [movieId, dispatch]);
// };
