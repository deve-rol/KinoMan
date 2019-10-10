import axios from "axios"

export default () => {
    return axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6d65fd685a5fa4208280ac51e403570b&language=ru-ru")
};
