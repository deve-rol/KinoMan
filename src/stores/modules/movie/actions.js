import * as types from "./types";
import {
    GetNewMovie,
    GetGenresMovie,
    GetMovieById,
} from "./api/methods";

export default {
    [types.A_GET_NEW_MOVIE] ( context, payload ) {
        return new Promise((resolve) => {
            GetNewMovie(payload).then(res => {
                resolve(res);
            })
        })
    },
    [types.A_GET_GENRES_MOVIE] ( context, payload ) {
        return new Promise((resolve) => {
            GetGenresMovie(payload).then(res => {
                resolve(res);
            })
        })
    },
    [types.GET_MOVIE_BY_ID] ( context, payload ) {
        return new Promise((resolve) => {
            GetMovieById(payload).then(res => {
                resolve(res);
            })
        })
    }
};
