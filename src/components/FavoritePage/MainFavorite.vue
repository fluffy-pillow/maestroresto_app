<template>
    <main class="main-favorite">
        <FavoriteList>
            <FavoriteItem
                v-for="(item, key) of favorite"
                :key="key"
                :data="item"
            >
            </FavoriteItem>
        </FavoriteList>
    </main>
</template>

<script>
    import FavoriteList from "./FavoriteList";
    import FavoriteItem from "./FavoriteItem";
    export default {
        name: "MainFavorite",
        components: {FavoriteItem, FavoriteList},
        props: {
            favorite: Array
        }
    }
</script>

<style scoped>
.main-favorite {
    padding-top: 44px;
    margin-top: env(safe-area-inset-top);
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 81px;
}
</style>