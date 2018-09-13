Vue.component('keyword-input', {
    props: ['default-keyword'],
    data: function(){
        return{
            enteredKeyword: this.defaultkeyword
        }
    },
    watch:{
        enteredKeyword: function (){
            this.$emit("typestype",this.enteredKeyword)
        }
    },
    template:
    `
        <div class="input-section">
            <input name="keyword" type="text" v-model="enteredKeyword">
            <button class="go-button">Go</button>
        </div>
    `
})