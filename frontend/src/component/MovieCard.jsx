import { Poster_Url } from "../utils/Constant"

const MovieCard = ({poster}) => {
    return (
        <div>
            <div className="w-50 h-70 flex flex-row gap-4 cursor-pointer">
                <img src={`${Poster_Url}/${poster}`} alt="" className="w-[15rem] h-[16rem]" />
            </div>
        </div>
    )
}

export default MovieCard
