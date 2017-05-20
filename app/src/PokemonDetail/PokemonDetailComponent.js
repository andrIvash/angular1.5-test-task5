'use strict';

pokemonApp.component('pokemonDetail', {
    controller: function PokemonListCtrl($routeParams, PokemonsService) {

       this.pokemonLoaded = false;
       var self = this;

        this.pokemon = PokemonsService.get({
            pokemonId: $routeParams['pokemonId']
        }, function(successResult) {
            // Окей!
            console.log(successResult);
            self.notfoundError = false;
            self.pokemonLoaded = true;


        }, function(errorResult) {
            // Не окей..
            self.notfoundError = true;
            self.pokemonLoaded = true;
        });

    //    this.pokemon.$promise.then(function(result) {
    //         //$scope.pokemonLoaded = true;
    //     });

    //    this.deletePokemon = function(pokemonId) {

    //         this.pokemon.$delete({
    //             pokemonId: pokemonId
    //         }, function(successResult) {
    //             // Окей!
    //             this.deletionSuccess = true;
    //         }, function(errorResult) {
    //             // Не окей..
    //             this.deletionError = true;
    //         });

    //     }


    },

    templateUrl: './src/pokemonDetail/pokemonDetail.html'


});
