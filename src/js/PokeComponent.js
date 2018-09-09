Vue.component('pokemon', {
    props: ["pokemon-object"],
    data: function(){
        return{
        }
    },
    template:
    `
        <div>
           <div class="card-header">
                <h1 class="card-name">{{pokemonObject.pokemon.name}}</h1>
                <h2 class="card-id">{{pokemonObject.pokemon.expanded.id}}</h2>
            </div>
            <div class="card-main">
                // <img class="card-sprite" :src="pokemonObject.pokemon.expanded.sprites.front_default">
            </div>
        </div>
    `
})