'use strict';

Vue.component('keyword-input', {
    props: ['default-keyword'],
    data: function data() {
        return {
            enteredKeyword: this.defaultkeyword
        };
    },
    watch: {
        enteredKeyword: function enteredKeyword() {
            this.$emit("typestype", this.enteredKeyword);
        }
    },
    template: '\n        <div class="input-section">\n            <input name="keyword" type="text" v-model="enteredKeyword">\n            <button class="go-button">Go</button>\n        </div>\n    '
});
//# sourceMappingURL=KeywordInputComponent.js.map
