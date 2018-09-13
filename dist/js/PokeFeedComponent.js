'use strict';

Vue.component('poke-feed', {
    props: ['pokemon-data'],
    data: function data() {
        return {};
    },
    template: '\n        <div class="pokemon-feed-section">\n            <pokemon v-for="(onePokemonObject, index) in pokemonData" v-if="index < 10" :pokemon-object="onePokemonObject"></pokemon>\n            <img v-if="!pokemonData.length" src="dist/img/loading2.gif" alt="loading/rolling pokemon ball" width="100%">\n        </div>\n    '
});
//# sourceMappingURL=PokeFeedComponent.js.map
