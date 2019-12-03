<template>
    <v-ons-page class="learning" ref="learning">
        <div class="bg-circles">
          <svg width="293" height="303" viewBox="0 0 293 303" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="146.5" cy="146.5" r="146" stroke="#F2F4F5"/>
            <circle cx="156.5" cy="176.5" r="126" stroke="#F2F4F5"/>
          </svg>
        </div>
        <v-ons-toolbar class="search"
                       :class="{transformed: bTransformed, notEmpty: query !== ''}"
        >
            <div class="center">
                <div class="content">
                    <SearchInput :placeholder-text="'Поиск по материалам'"></SearchInput>
                    <SearchDropdown></SearchDropdown>
                </div>
            </div>
        </v-ons-toolbar>

        <main class="main-learning">
            <Favorite></Favorite>
            <Courses :unfinished-courses="unfinishedCourses"></Courses>
            <Structure></Structure>
            <SalesTechnique></SalesTechnique>
        </main>
    </v-ons-page>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Favorite from "../components/Lists/Favorite/Default/Favorite";
    import Courses from "../components/Lists/Courses/Courses";
    import Structure from "../components/Lists/Structure/Structure";
    import SalesTechnique from "../components/Lists/SalesTechnique/SalesTechnique";
    import SearchInput from "../components/Search/SearchInput";
    import SearchDropdown from "../components/Search/SearchDropdown";

    export default {
        name: "Learning",
        components: {SearchDropdown, SearchInput, SalesTechnique, Structure, Courses, Favorite},
        data () {
            return {
                bLoaded: false,
                bTransformed: false,
                pageContent: null,
                unfinishedCourses: [
                    {
                        percent: 67,
                        pictureUrl: '',
                        title: 'Оборудование для организации обслуживания гостей"'
                    },
                    {
                        percent: 67,
                        pictureUrl: '',
                        title: 'Оборудование для организации обслуживания гостей"'
                    },
                    {
                        percent: 67,
                        pictureUrl: '',
                        title: 'Оборудование для организации обслуживания гостей"'
                    },
                    {
                        percent: 67,
                        pictureUrl: '',
                        title: 'Оборудование для организации обслуживания гостей"'
                    }
                ]
            }
        },
        methods: {
            switchStyle () {
                if (this.$refs.learning) {
                    if (this.$refs.learning.$el.scrollTop >= 1) {
                        this.bTransformed = true
                    }
                    if (this.$refs.learning.$el.scrollTop <= 1) {
                        this.bTransformed = false
                    }
                }
            },
        },
        computed: {
            ...mapGetters({
                query: 'search/getQuery'
            })
        },
        mounted () {
            this.pageContent = this.$refs.learning.$el.querySelector('.page__content')
            this.pageContent.addEventListener('scroll', this.switchStyle)
        },
        beforeDestroy () {
            this.pageContent.removeEventListener('scroll', this.switchStyle)
        }
    }
</script>

<style scoped>
.bg-circles {
  position: absolute;
  top: -88px;
  left: -75px;
  z-index: -1;
}

main {
    padding-bottom: 64px;
    padding-top: 44px;
}

.learning {
    background-color: #ffffff !important
}

.search {
    height: calc(52px + constant(safe-area-inset-top));
    height: calc(52px + env(safe-area-inset-top));
    background-image: none;
    background-color: transparent;
    box-shadow: none;
}

.search.notEmpty {
    height: 100%;
    background-color: #ffffff;
}

.center {
    height: calc(52px + constant(safe-area-inset-top));
    height: calc(52px + env(safe-area-inset-top));
    line-height: unset !important;
    margin: 0;
    display: flex;
    align-items: flex-end;
}

.content {
    padding-top: 8px;
    padding-bottom: 8px;
    width: 100%;
}

.search.transformed {
    background-color: #FFFFFF !important;
    box-shadow: 0 5px 2px -1px rgba(0, 0, 0, 0.05);
}
</style>
