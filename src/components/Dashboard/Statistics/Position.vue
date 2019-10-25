<template>
    <div class="position">
        <div class="number">
            351
        </div>
        <div class="text">
            место в рейтинге
        </div>
        <div class="arrow">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90656 9.75H12.2841L8.62406 13.41C8.33156 13.7025 8.33156 14.1825 8.62406 14.475C8.91656 14.7675 9.38906 14.7675 9.68156 14.475L14.6241 9.5325C14.9166 9.24 14.9166 8.7675 14.6241 8.475L9.68906 3.525C9.54894 3.38456 9.3587 3.30563 9.16031 3.30563C8.96192 3.30563 8.77169 3.38456 8.63156 3.525C8.33906 3.8175 8.33906 4.29 8.63156 4.5825L12.2841 8.25H3.90656C3.49406 8.25 3.15656 8.5875 3.15656 9C3.15656 9.4125 3.49406 9.75 3.90656 9.75Z" fill="#61707D" fill-opacity="0.5"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Position"
    }
</script>

<style scoped>
.position {
    background: #F2F4F5;
    border-radius: 20px;
    padding-top: 20px;
    padding-bottom: 14px;
    min-width: 42%;
    text-align: center;
}

.number {
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0.16px;
    color: #4B4B4B;
    font-family: 'Rubik', sans-serif;
}

.text {
    margin-top: 8px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.16px;
    color: #4B4B4B;
    font-weight: 400;
    padding-left: 12px;
    padding-right: 12px;
}

.arrow {
    margin-top: 12px;
}
</style>