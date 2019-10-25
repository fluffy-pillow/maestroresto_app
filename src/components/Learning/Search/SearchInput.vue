<template>
    <div class="search-input-outer">
        <div class="search-input-inner">
            <label class="search-input-label">
                <input type="text" placeholder="Поиск по материалам"
                       :value="query"
                       @input="onChangeQuery"
                        ref="searchInput"
                       autocorrect="off"
                       autocapitalize="off"
                       class="need-keyboard"
                >
                <span class="search-icon" v-if="bEmpty">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <path d="M15.4688 14.5688L11.7875 10.8875C12.7 9.775 13.25 8.35 13.25 6.79688C13.25 3.23438 10.3594 0.34375 6.79688 0.34375C3.23125 0.34375 0.34375 3.23438 0.34375 6.79688C0.34375 10.3594 3.23125 13.25 6.79688 13.25C8.35 13.25 9.77187 12.7031 10.8844 11.7906L14.5656 15.4688C14.8156 15.7188 15.2188 15.7188 15.4688 15.4688C15.7188 15.2219 15.7188 14.8156 15.4688 14.5688ZM6.79688 11.9656C3.94375 11.9656 1.625 9.64688 1.625 6.79688C1.625 3.94688 3.94375 1.625 6.79688 1.625C9.64688 1.625 11.9688 3.94688 11.9688 6.79688C11.9688 9.64688 9.64688 11.9656 6.79688 11.9656Z" fill="#61707D"/>
                    </g>
                    </svg>
                </span>
                <button class="clear-input-button" v-else @click="setEmpty">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z" fill="#4B4B4B"/>
                    </svg>
                </button>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        props: {
            query: String
        },
        data () {
            return {
                bEmpty: true
            }
        },
        methods: {
            setEmpty () {
                Keyboard.hide()
                this.$emit('update:query', '')
            },
            onChangeQuery (e) {
                this.$emit('update:query', e.target.value)
            }
        },
        watch: {
            query: function (newValue) {
                this.bEmpty = (newValue.length === 0)
            }
        }
    }
</script>

<style scoped>
.search-input-outer {
    height: 36px;
    width: 100%;
}

.search-input-inner {
    padding-left: 16px;
    height: inherit;
    padding-right: 16px;
}

.search-input-label {
    display: flex;
    height: inherit;
    background: #F2F4F5;
    border-radius: 16px;
    align-items: center;
}

input {
    height: 44px;
    margin-left: 20px;
    width: 100%;
    letter-spacing: -0.165px;
    color: rgba(97,112,125, 0.5);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}

.search-icon {
    display: flex;
    height: 100%;
    justify-content: center;
    width: 56px;
    align-items: center;
}

.clear-input-button {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 56px;
    background: transparent;
}
</style>
