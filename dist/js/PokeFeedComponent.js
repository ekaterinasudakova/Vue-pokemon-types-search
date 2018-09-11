'use strict';

Vue.component('poke-feed', {
    props: ['pokemon-data'],
    data: function data() {
        return {};
    },
    template: '\n        <div class="pokemon-feed-section">\n           <pokemon v-for="onePokemonObject in pokemonData" :pokemon-object="onePokemonObject"></pokemon>\n        </div>\n    '
});
//# sourceMappingURL=PokeFeedComponent.js.map
