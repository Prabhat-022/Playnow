import { Poster_Url } from "../utils/Constant"

const MovieCard = ({ poster }) => {
    return (
        <div>
            <div className=" flex flex-row gap-4 cursor-pointer">
                <img src={`${Poster_Url}/${poster}`} alt="" className=" h-[16rem]" />
            </div>
        </div>
    )
}

export default MovieCard
