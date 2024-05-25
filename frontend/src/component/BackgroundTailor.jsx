// import { useMovieByid } from '../hooks/useMovieByid';
import { useSelector } from 'react-redux';


const BackgroundTailor = () => {
    // useMovieByid(id);

    const tailor = useSelector(store => store.movie.tailorMovie);
    console.log(tailor);



    return (
        <>
            <div className="mt-2">
                {/* <img src={homeimg} alt="" className='h-[70vh] w-[100%] ' /> */}

                {/* <iframe src={`https://www.youtube.com/embed/${tailor.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`} frameBorder="0" allowFullScreen className="h-[70vh] w-[100%]">
                </iframe> */}
                <iframe
                    src={`https://www.youtube.com/embed/${tailor.key}?rel=0&autoplay=1&mute=1`}
                    frameBorder="0"
                    allowFullScreen
                    className="h-[70vh] w-[100%]"
                ></iframe>
                console.log(hello);


            </div>
        </>
    )
}

export default BackgroundTailor
