export const API_END_POINT = "http://localhost:8000/api/v1/user"


export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzk3MWVlNWQ1NjNhMmQ4NDAxZDc5MWMyODU4NjE0ZiIsInN1YiI6IjY2NTg5NzdkZDhmODA3Y2VmYTUwNjJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NX1WLHq6e-w3d9AOspZePpyD7EZarjcp_Eh0J1kMLR0'
    }
};

export const Now_Playing_Moving = 'https://api.themoviedb.org/3/movie/now_playing';
export const popular_Moving = 'https://api.themoviedb.org/3/movie/popular';
export const top_rated_Moving = 'https://api.themoviedb.org/3/movie/top_rated';
export const upcoming_Moving = 'https://api.themoviedb.org/3/movie/upcoming';
export const tailor_Url = 'https://api.themoviedb.org/3/movie/${movieId}/video'
export const Poster_Url = 'https://image.tmdb.org/t/p/w500';

export const Search_Movie_url ='https://api.themoviedb.org/3/search/movie?query=';