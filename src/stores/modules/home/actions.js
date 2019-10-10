import * as types from "./types";
import * as mutation_types from "./mutation_types";
import {GetCategory} from "./api/methods";

export default {
    [types.A_GET_CATEGORY] ( context ) {
        return new Promise((resolve, reject) => {
            GetCategory().then(res => {
                resolve(res);
            })
        })
    }
};
