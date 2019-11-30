<template>
    <div class="add-file-interface" :class="{open: $parent.bOpenAddFileInterface}">
        <ul class="buttons-list">
            <li class="button-item">
                <button class="close-panel-button" @click="$parent.bOpenAddFileInterface = false">

                </button>
            </li>
            <li class="button-item">
                <button class="add-file-button add-doc-file-button">

                </button>
            </li>
            <li class="button-item">
                <button class="add-file-button add-audio-file-button">

                </button>
            </li>
            <li class="button-item">
                <button class="add-file-button add-video-file-button">

                </button>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "AddFileInterface"
    }
</script>

<style scoped>
.add-file-interface {
    position: absolute;
    width: 0;
    top: -1px;
    left: 0;
    height: calc(100% + 1px);
    background-color: #F9FBFD;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.add-file-interface.open {
    width: 100%;
    opacity: 1;
}

.close-panel-button {
    height: 32px;
    background-image: url(../../../assets/images/cross-green.svg);
    width: 32px;
    background-position: center center;
    background-size: 17px;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #ffffff;
}

.add-file-button {
    height: 32px;
    width: 32px;
    background-position: center center;
    background-size: 17px;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #3DD498;
}

.add-doc-file-button {
    background-image: url(../../../assets/images/book-white.svg);

}

.add-audio-file-button {
    background-image: url(../../../assets/images/music-white.svg);
    background-position: 45% 50%;

}

.add-video-file-button {
    background-image: url(../../../assets/images/video-white.svg);

}

.buttons-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}


</style>