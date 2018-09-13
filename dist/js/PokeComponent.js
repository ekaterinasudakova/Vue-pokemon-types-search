"use strict";

Vue.component('pokemon', {
    props: ["pokemon-object"],
    data: function data() {
        return {};
    },
    template: "\n        <div class=\"pokemon-card\">\n           <div class=\"card-header\">\n                <h2 class=\"card-name\">{{pokemonObject.pokemon.name}}</h2>\n                <h3 v-if=\"pokemonObject.pokemon.expanded\" class=\"card-id\">{{pokemonObject.pokemon.expanded.id}}</h3>\n            </div>\n            <div class=\"card-main\">\n                <img v-if=\"pokemonObject.pokemon.expanded\" class=\"card-sprite\" :src=\"pokemonObject.pokemon.expanded.sprites.front_default\">\n            </div>\n        </div>\n    "
});
//# sourceMappingURL=PokeComponent.js.map
