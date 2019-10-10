<template>
    <div class="present-movie">
        <div class="poster">
            <img :src="getPoster(movie.poster_path)" width="250">
        </div>
        <div class="info-text">
            <div class="flex-between">
                <h3 class="title">{{movie.title}}</h3>
                <span class="to-back" @click="goBack()">Вернтся назад</span>
            </div>
            <p v-if="movie.overview !== ''" class="overview">
                {{movie.overview}}
            </p>
            <p v-else class="overview">Описание не найдено</p>
            <p class="more-text">Название: {{movie.title}}</p>
            <p class="more-text">Название зарубежное: {{movie.original_title}}</p>
            <p class="more-text">Дата выпуска: {{movie.release_date}}</p>
            <p class="more-text">Жанр: {{getGenres(movie.genres)}}</p>
            <p class="more-text">Статус: {{movie.status}}</p>
            <p v-if="movie.runtime" class="more-text">Продолжительность: {{movie.runtime}} мин.</p>
            <p class="more-text">Рейтинг: {{movie.vote_average}}</p>
            <p class="more-text" v-if="movie.adult">Фильм для взрослых</p>
        </div>
        <div v-if="movie.backdrop_path" class="more-photo">
            <h3>Кадры из фильма</h3>
            <img :src="getPoster(movie.backdrop_path)" width="350">
        </div>
    </div>
</template>

<script>
    import * as types from "@/stores/modules/movie/types"
    export default {
        name: "present_movie",
        data() {
            return {
                img_api: "https://image.tmdb.org/t/p/original",
                movie: {}
            }
        },
        mounted() {
            this.$store.dispatch("movie/" + types.GET_MOVIE_BY_ID, this.$route.params.movie_id)
                .then( res => {
                    this.movie = res.data
                })
        },
        methods: {
            goBack() {
                window.history.back();
            },
            getGenres(genres) {
                if (genres) {
                    genres = genres.map( val => val.name);
                    return genres.join(", ")
                }
                return ""
            },
            getPoster(path) {
                if (path) {
                    return this.img_api+path
                } else {
                    return "http://www.royal-pro.ir/wp-content/uploads/revslider/light-opus/polygon-background-250x375.jpg"
                }
            }
        },
        computed: {

        }
    }
</script>

<style scoped>
@import "index.css";
</style>