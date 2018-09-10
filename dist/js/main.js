'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log('Hello World from app.js! \nChange this message, and make sure it changes in the browser \nto verify that you\'re working in the right files.');

var API_BASE = 'http://circuslabs.net/proxies/pokeapi.co/?';

var app = new Vue({
    el: '#app',
    data: {
        pokemonData: []
    },
    created: function created() {
        this.doPokeSearch();
    },
    methods: {
        doPokeSearch: function doPokeSearch(keyword) {
            var _this = this;

            axios.get(API_BASE + "type/" + "fire").then(function (response) {
                // handle success
                console.log("pokeapi said: ", response.data.pokemon);
                _this.pokemonData = response.data.pokemon;
                // console.log("pokemonOfTypeArray: ", pokemonOfTypeArray);
                // this.pokemonData=[];
                //need help extracting pokemonData out of this forEach loop
                //or should this loop be happening in a separate component?

                var _loop = function _loop() {
                    var pokemon = _this.pokemonData[p];

                    if (p > 10) {
                        return {
                            v: void 0
                        };
                    }
                    console.log('this is pokemonData: ', pokemon.pokemon);
                    // axios call to fetch that pokemon
                    axios.get(pokemon.pokemon.url).then(function (response) {
                        console.log('second axios get response: ', response);
                        Vue.set(pokemon.pokemon, "expanded", response.data);
                        console.log('this is new pokemonData: ', pokemon.pokemon);
                    }).catch(function (err) {
                        console.warn(err);
                    });
                };

                for (var p in _this.pokemonData) {
                    var _ret = _loop();

                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
                };
            }).catch(function (errors) {
                console.warn('something went wrong with pokeSearch!', errors);
            });
        }
    }

});
//# sourceMappingURL=main.js.map
