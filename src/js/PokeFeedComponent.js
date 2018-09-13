Vue.component('poke-feed', {
    props: ['pokemon-data'],
    data: function(){
        return{
        
        }
    },
    template:
    `
        <div class="pokemon-feed-section">
            <pokemon v-for="(onePokemonObject, index) in pokemonData" v-if="index < 10" :pokemon-object="onePokemonObject"></pokemon>
            <img v-if="!pokemonData.length" src="dist/img/loading2.gif" alt="loading/rolling pokemon ball" width="100%">
        </div>
    `
})