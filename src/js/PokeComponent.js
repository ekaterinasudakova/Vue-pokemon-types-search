Vue.component('pokemon', {
    props: ["pokemon-object"],
    data: function(){
        return{
        }
    },
    template:
    `
        <div>
           {{pokemonObject}}
        </div>
    `
})