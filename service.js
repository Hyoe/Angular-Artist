'use strict';

myApp.service('ourSvc', function() {

    this.reallyLike = [];
    this.kindOfLike = [];

    this.addNewArtist = function(artistObj) {

        // Constructor function for our artist object
        function buildArtist(name, genre, score) {
            return {
                name: name,
                genre: genre,
                score: score
            }
        }

        var artist = buildArtist(artistObj.name, artistObj.genre, artistObj.score);

        if (artistObj.score >= 50) {
            this.reallyLike.push(artist);
        }
        else if (artistObj.score < 50) {
            this.kindOfLike.push(artist);
        }

    };

});