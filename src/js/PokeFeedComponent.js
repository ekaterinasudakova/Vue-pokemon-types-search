Vue.component('poke-feed', {
    props: ['pokemon-data'],
    data: function(){
        return{
        
        }
    },
    template:
    `
        <div class="pokemon-feed-section">
           <pokemon v-for="onePokemonObject in pokemonData" :pokemon-object="onePokemonObject"></pokemon>
        </div>
    `
})