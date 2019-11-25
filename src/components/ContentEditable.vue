<template>
    <label class="contenteditable" @click="focus">
        <span class="contenteditable__input need-keyboard"
              ref="contentEditable"
              :class="inputClass"
              :style="{border: border}"
              :placeholder="placeholderText"
              contenteditable="true"
              @input="update"
              @paste="onPaste"
              @click="$emit('onFocus')"
              v-click-outside="handleBlur"
        >
        </span>
    </label>
</template>

<script>
    import vClickOutside from 'v-click-outside'

    export default {
        name: "ContentEditable",
        props: {
            content: String,
            border: {
                type: String,
                default: '1px solid #EAECEC',
            },
            placeholderText: {
                type: String,
                default: ''
            },
            inputClass: String
        },
        methods: {
            handleBlur () {
                this.$emit('onBlur')
            },
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
        directives: {
            clickOutside: vClickOutside.directive
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
    border-radius: 16px;
    min-height: 18px;
    color: #61707D;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    -webkit-user-select: text;
    user-select: text;
}

.contenteditable__input:focus {
    outline: none;
}

.contenteditable__input:empty:before{
    content: attr(placeholder);
    display: block; /* For Firefox */
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    letter-spacing: -0.02px;
    color: #61707D;
    mix-blend-mode: normal;
    opacity: 0.5;
}
</style>