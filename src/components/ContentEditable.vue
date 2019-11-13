<template>
    <label class="contenteditable" @click="focus">
        <span class="contenteditable__input"
              ref="contentEditable"
              contenteditable="true"
              @input="update"
              @paste="onPaste"
        >
        </span>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: "ContentEditable",
        props: {
            content: String
        },
        methods: {
            update:function(event){
                event.preventDefault()
                this.$emit('update',event.target.innerText.trim())
            },
            focus () {
                this.$refs.contentEditable.focus()
            },
            onPaste (event) {
                event.preventDefault()
                event.stopPropagation()
                let paste = (event.clipboardData || window.clipboardData).getData('text/plain')
                event.target.textContent += paste
                this.$emit('update',event.target.innerText.trim())
                this.moveCursorToEnd()
            },
            moveCursorToEnd () {
                let el = this.$refs.contentEditable
                let range = document.createRange()
                let sel = window.getSelection()
                range.setStart(el.childNodes[0], el.innerHTML.length)
                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)
            }
        },
        mounted:function(){
            this.$refs.contentEditable.innerText = this.content
        }
    }
</script>

<style scoped>
.contenteditable {
    display: flex;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.contenteditable__input {
    background: #FFFFFF;
    border: 1px solid #EAECEC;
    border-radius: 16px;
    min-height: 18px;
    margin-top: 2px;
    color: #61707D;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    user-select: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
}

.contenteditable__input:focus {
    outline: none;
}
</style>