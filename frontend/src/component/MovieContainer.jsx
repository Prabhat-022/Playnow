import { useSelector } from "react-redux";
import MoviePlaylist from "./MoviePlaylist";

const MovieContainer = () => {
    const movie = useSelector(state => state.movie)
    console.log(movie)

    return (
        <>
            <div className="">
                <MoviePlaylist title={"Top 10 In Us Today"} movies={movie.nowPlayingMovie} />
                <MoviePlaylist title={"Popular On PlayNow"} movies={movie.popularMoving} />
                <MoviePlaylist title={"Only on PlayNow"} movies={movie.topRatedMovie} />
                <MoviePlaylist title={"Upcoming  Movie"} movies={movie.upcomingMoving} />

                {/* <MoviePlaylist title={"Horror Movies"} /> */}
                {/* <MoviePlaylist title={"Trending Now"} /> */}
                {/* <MoviePlaylist title={"Comedies"} /> */}
                {/* <MoviePlaylist title={"Action"} /> */}
            </div>

        </>
    )
}

export default MovieContainer;
