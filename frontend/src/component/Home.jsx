import { useEffect } from "react"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Tailor from "./Tailor"
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"
import MovieContainer from "./MovieContainer"
import { usePopularMovie } from "../hooks/usePopularMovie"
import { useTopRatedMovie } from "../hooks/useTopRatedMovie"
import { useUpcomingMovie } from "../hooks/useUpcomingMovie"
import Header from "./Header"


const Home = () => {
    useNowPlayingMovie()
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="">
                <div className="absolute ">
                    <Header />
                </div>
                <Sidebar />
                <Tailor />
                <MovieContainer />
                <Footer />
            </div>
        </>
    )
}

export default Home
