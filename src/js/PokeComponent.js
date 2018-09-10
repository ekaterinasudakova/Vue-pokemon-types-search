Vue.component('pokemon', {
    props: ["pokemon-object"],
    data: function(){
        return{
        }
    },
    template:
    `
        <div class="pokemon-card">
           <div class="card-header">
                <h2 class="card-name">{{pokemonObject.pokemon.name}}</h2>
                <h3 class="card-id">{{pokemonObject.pokemon.expanded.id}}</h3>
            </div>
            <div class="card-main">
                <img class="card-sprite" :src="pokemonObject.pokemon.expanded.sprites.front_default">
            </div>
        </div>
    `
})