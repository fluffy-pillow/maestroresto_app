<template>
    <main class="main-slug">
        <div class="head">
            <div class="container">
                <v-ons-back-button>
                </v-ons-back-button>
            </div>
        </div>
        <div class="body">
            <div class="short-desc">
                <div class="type">
                    <div class="type-icon">

                    </div>
                    <div class="type-name">
                        Горячее
                    </div>
                </div>

                <div class="title">
                    Лодочки из картофеля
                </div>
                <div class="weight">
                    250 гр.
                </div>
            </div>

            <div class="desc">
                <div class="duration-block">
                    <div class="duration-icon">
                    </div>
                    <div class="duration-title">
                        Время приготовления 60 минут
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "MainSlug"
    }
</script>

<style scoped>
.head {
    background-image: url(https://s2.eda.ru/StaticContent/Photos/120131090202/120726192046/p_O.jpg);
    height: 331px;
    background-size: cover;
    background-position: center center;
}

.back-button {
    background-color: rgba(255, 255, 255, 0.1);
    width: 30px;
    height: 30px;
    padding: 0;
    background-image: url(../../../../assets/images/arrow-left-white.svg);
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;

}

.container {
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
}

.body {
    position: relative;
    top: -16px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: #ffffff;
    padding-left: 16px;
    padding-right: 16px;
}

.short-desc {
    padding-top: 40px;
    padding-bottom: 16px;
    border-bottom: 1px solid #EFF1F2;
    position: relative;
}

.title {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.04px;
    color: #000000;
}

.weight {
    letter-spacing: 0.16px;
    color: #61707D;
    opacity: 0.7;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
}

.type {
    position: absolute;
    background: #FFC542;
    border-radius: 53px;
    height: 30px;
    min-width: 77px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    top: -15px;
}

.type-icon {
    width: 20px;
    height: 20px;
    min-width: 20px;
    background-image: url(../../../../assets/images/hot.svg);
}

.type-name {
    margin-left: 10px;
    font-size: 12px;
    line-height: 14px;
    font-feature-settings: 'liga' off, 'kern' off;
    color: #FFFFFF;
}

.duration-block {
    margin-top: 16px;
    display: flex;
    align-items: center;
}

.duration-icon {
    background-image: url(../../../../assets/images/clock.svg);
    width: 32px;
    min-width: 32px;
    height: 32px;
    background-size: 18px 18px;
    background-repeat: no-repeat;
    background-color: rgba(97,112,125, 0.1);
    background-position: center center;
    border-radius: 10px;

}

.duration-title {
    letter-spacing: 0.16px;
    font-size: 14px;
    line-height: 16px;
    margin-left: 16px;
    color: #61707D;
}
</style>