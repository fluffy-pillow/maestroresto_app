<template>
    <li class="search-results-item"
        @click="openCourse"
    >
      <span class="left">
        <span class="image">
          <img :src="require('@/assets/uploads/' + data.image)">
        </span>
      </span>
      <span class="right">
        <span class="name">
          {{data.name}}
        </span>
        <span class="info-bottom">
            <span class="info-bottom-left">
                {{data.exercises}} занятий
            </span>
            <span class="info-bottom-center">

            </span>
            <span class="info-bottom-right">
                {{data.time}} минут
            </span>
        </span>
      </span>
    </li>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "SearchResultsItem",
        props: {
          data: Object
        },
        methods: {
            openCourse () {
                this.redir('Course', {
                        animation: 'slide',
                        animationOptions: {duration: 0.5},
                    },
                    false
                )
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show',
            })
        }
    }
</script>

<style scoped>
.search-results-item {
  border-bottom: 1px solid #EFF1F2;
  display: flex;
  padding-top: 12px;
  padding-bottom: 11px;
  align-items: center;
}

.search-results-item:last-child {
  border-bottom: none;
}

.image {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
  display: block;
}

.image img {
  width: 100%;
  height: auto;
}

.right {
  margin-left: 16px;
  flex: 1;
}

.left {
  display: block;
  width: 44px;
  height: 44px;
}

.name {
  letter-spacing: -0.078px;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  color: #4B4B4B;
  white-space: initial;
  text-align: left;
}

.info-bottom-left, .info-bottom-right {
  letter-spacing: 0.16px;
  font-size: 12px;
  line-height: 16px;
  color: #61707D;
}

.info-bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.info-bottom-center {
  width: 4px;
  height: 4px;
  margin-left: 11px;
  margin-right: 11px;
  background: #61707D;
  border-radius: 50%;
}
</style>
