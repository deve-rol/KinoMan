<template>
    <div class="movies">
        <div
                v-for="(item, key) in movies"
                :key="key"
                class="card-movie"
        >
            <div @click="toMovie(item.id)" class="poster">
                <img :src="getPoster(item.poster_path)" width="250">
            </div>
            <div class="info-text">
                <h3 class="title" @click="toMovie(item.id)">{{item.title}}</h3>
                <p v-if="item.overview.length > 0" class="overview">
                    {{item.overview|strLength250}}
                </p>
                <p v-else class="overview">Описание не найдено</p>
            </div>
            <div class="card-footer">
                <button @click="toMovie(item.id)">Смотреть онлайн</button>
                <p>Дата релиза: {{item.release_date}}</p>
            </div>
        </div>
        <div class="pagination">
            <div
                    :class="['pagination-btn',{'active': 1 === current_page}]"
                    @click="changePage(1)"
            >1</div>
            <p v-show="last_page > 20" class="pagin-dots">...</p>
            <div
                    v-for="item in pages"
                    :key="item"
                    :class="['pagination-btn',{'active': item === current_page}]"
                    @click="changePage(item)"
            >
                {{item}}
            </div>
            <p v-show="last_page > 20" class="pagin-dots">...</p>
            <div
                    :class="['pagination-btn',{'active': last_page === current_page}]"
                    @click="changePage(last_page)"
            >{{last_page}}</div>
        </div>
    </div>
</template>

<script>
    import * as types from "@/stores/modules/movie/types"
    export default {
        name: "index",
        data() {
            return {
                img_api: "https://image.tmdb.org/t/p/original",
                movies: [],
                current_page: 1,
                last_page: 1,
            }
        },
        mounted() {
            this.getMovies()
        },
        methods: {
            toMovie(id) {
                this.$router.push(`/movie/${id}`)
            },
            changePage(page) {
                this.current_page = page;
                this.getMovies();
                window.scrollTo(0,0)
            },
            getMovies() {
                this.$store.dispatch("movie/" + types.A_GET_NEW_MOVIE, {
                    page: this.current_page
                })
                    .then( res => {
                        this.movies = res.data.results;
                        this.last_page = res.data.total_pages;
                    })
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
            pages() {
                let pages = [];
                for (let i = 2; i < this.last_page; i++) {
                    pages.push(i)
                }
                if (this.last_page > 20) {
                    pages = pages.filter( val => {
                        return val > this.current_page - 10 && val < this.current_page + 10;
                    })
                }
                return pages
            }
        },
        filters: {
            strLength250: (val) => {
                return val.length > 250 ? val.substr(0, 250) + "..." : val
            }
        }
    }
</script>

<style scoped>
@import "index.css";
</style>