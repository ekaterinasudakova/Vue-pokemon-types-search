Vue.component('poke-feed', {
    props: ['pokemon-data'],
    data: function(){
        return{
        
        }
    },
    template:
    `
        <div>
           pokemon feed:
           <pokemon v-for="onePokemonObject in pokemonData" :pokemon-object="onePokemonObject"></pokemon>
        </div>
    `
})