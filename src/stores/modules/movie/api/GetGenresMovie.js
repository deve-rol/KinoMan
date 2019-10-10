import axios from "axios"

export default (data) => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${data.genres}&page=${data.page}&api_key=6d65fd685a5fa4208280ac51e403570b&language=ru-ru`)
};
