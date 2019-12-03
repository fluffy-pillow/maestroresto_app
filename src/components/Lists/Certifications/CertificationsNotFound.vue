<template>
    <div class="certifications-not-found">
        <div class="container">
            <div class="icon">
                <svg width="60" height="75" viewBox="0 0 60 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.9137 40.3037L45.77 29.375H14.23L2.08625 40.3037L0.41375 38.4462L13.27 26.875H46.73L59.5862 38.4462L57.9137 40.3037Z" fill="#61707D"/>
                    <path d="M56.25 60H3.75C1.68187 60 0 58.3181 0 56.25V38.125H20V39.375C20 42.4769 22.5231 45 25.625 45H34.375C37.4769 45 40 42.4769 40 39.375V38.125H60V56.25C60 58.3181 58.3181 60 56.25 60ZM2.5 40.625V56.25C2.5 56.9394 3.06063 57.5 3.75 57.5H56.25C56.9394 57.5 57.5 56.9394 57.5 56.25V40.625H42.4044C41.8013 44.5144 38.43 47.5 34.375 47.5H25.625C21.57 47.5 18.1987 44.5144 17.5956 40.625H2.5Z" fill="#61707D"/>
                    <path d="M22.3046 16.8302L17.9295 9.95508L15.8203 11.2973L20.1953 18.1724L22.3046 16.8302Z" fill="#3DD498"/>
                    <path d="M44.805 11.2951L42.6957 9.95312L38.3215 16.8282L40.4307 18.1702L44.805 11.2951Z" fill="#3DD498"/>
                    <path d="M31.25 8.75H28.75V16.875H31.25V8.75Z" fill="#3DD498"/>
                </svg>
            </div>
            <div class="message">
                На данный момент нет доступных аттестаций
            </div>
            <div class="recommendation">
                Попробуйте заглянуть чуть позже
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CertificationsNotFound"
    }
</script>

<style scoped>
.certifications-not-found {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.message {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.04px;
    color: #61707D;
    margin-top: 47px;
    text-align: center;
    width: 280px;
}

.recommendation {
    margin-top: 16px;
    text-align: center;
    letter-spacing: 0.16px;
    color: #61707D;
    font-size: 14px;
    line-height: 20px;
    width: 300px;
}
</style>