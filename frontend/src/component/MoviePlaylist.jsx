/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard"

const MoviePlaylist = (props) => {

    const {title, movies} = props;

    return (
        <>
            <div className="text-xl font-bold  ">
                <p>{title}</p>
                {/* <MovieCard /> */}
                <div className="flex gap-4  mt-2 ">
                    {
                      movies &&  movies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} poster={movie.poster_path} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

// Define PropTypes
MoviePlaylist.propTypes = {
    title: PropTypes.string.isRequired, // This line validates the 'title' prop as a string
    movies: PropTypes.array.isRequired // This validates the 'movies' prop as an array
}
export default MoviePlaylist


