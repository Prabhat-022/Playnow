import { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Tailor from "./Tailor"
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"
import MovieContainer from "./MovieContainer"
import { usePopularMovie } from "../hooks/usePopularMovie"
import { useTopRatedMovie } from "../hooks/useTopRatedMovie"
import { useUpcomingMovie } from "../hooks/useUpcomingMovie"


const Home = () => {
    useNowPlayingMovie()
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();

    useEffect(() => {
    }, [])
    return (
        <>
            <Sidebar />
            <Header />
            <Tailor />
            <MovieContainer/>
            <Footer />
        </>
    )
}

export default Home
