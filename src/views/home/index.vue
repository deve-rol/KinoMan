<template>
    <div class="home-content">
        <div class="side-bar">
            <div class="headline">
                <h3>Категории - КиноМан</h3>
            </div>
            <div class="genres-list">
                <router-link
                        to="/"
                        tag="div"
                        class="genres-item"
                        exact
                >
                    2019
                </router-link>
                <router-link
                        v-for="(item, key) in genres"
                        :key="key"
                        :to="`/genres/${item.id}`"
                        tag="div"
                        class="genres-item"
                >
                    {{item.name}}
                </router-link>
            </div>
        </div>
        <div class="movies-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import * as types from "@/stores/modules/home/types"
    export default {
        name: "index",
        data() {
            return {
                genres: [],
                current_page: 1,
                last_page: 1,
                current_genre: 0
            }
        },
        mounted() {
            this.$store.dispatch("home/" + types.A_GET_CATEGORY)
                .then( res => {
                    res.data.genres.forEach( (val, key) => {
                        this.$set(this.genres, key, val)
                    });
                });
        }
    }
</script>

<style scoped>
@import "index.css";
</style>