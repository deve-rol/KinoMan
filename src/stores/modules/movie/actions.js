import * as types from "./types";
import * as mutation_types from "./mutation_types";
import {GetNewMovie} from "./api/methods";

export default {
    [types.A_GET_NEW_MOVIE] ( context, payload ) {
        return new Promise((resolve, reject) => {
            GetNewMovie(payload).then(res => {
                resolve(res);
            })
        })
    }
};
