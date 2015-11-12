

var Engine = function () {
    'use strict';
// private attributes and methods
    //var plateau = new Array(6);
    var plateau = [["noir", "vert", "blanc", "bleu", "rouge", "blanc"],
        ["jaune", "blanc", "vert", "rouge", "jaune", "bleu"],
        ["bleu", "jaune", "bleu", "blanc", "noir", "rouge"],
        ["rouge", "noir", "rouge", "vert", "bleu", "blanc"],
        ["blanc", "vert", "jaune", "noir", "jaune", "vert"],
        ["jaune", "bleu", "noir", "rouge", "vert", "noir"]
    ];
    var i,j;
    /*this.init = function() {
        for (i = 0; i < 6; i++) {

            plateau[i] = new Array(6);

            for (j = 0; j < 6; j++) {

                plateau[i][j] = "empty";

            }
        }

    };*/
    this.juxtaposition = function(){

        // test horisontal
        for (i = 0; i < 5; i++) {



            for (j = 0; j < 6; j++) {

                if (plateau[i][j] === plateau[i + 1][j] /* && plateau[i][j] !== "empty"*/ ) {

                    throw "Error";


                }

            }
        }
        for (i = 0; i < 6; i++) {


            // test Vertical
            for (j = 0; j < 5; j++) {

                if (plateau[j][i] === plateau[j + 1][i]/* && plateau[j][i] !== "empty" */) {

                    throw "Error";


                }

            }
        }

    };
    this.firstmove_player1 = function(){

        if(plateau[0][0] === "jaune"){

            plateau[0][0] = "empty1";
            return true;

        }else if(plateau[0][5] === "jaune"){

            plateau[0][5] = "empty1";
            return true;

        }else if(plateau[5][5] === "jaune"){

            plateau[5][5] = "empty1";
            return true;

        }else if (plateau[5][0] === "jaune"){

            plateau[0][0] = "empty1";
            return true;


        }
        return false;




        };
    this.display = function(){

        for (i = 0; i < 6; i++) {



            for (j = 0; j < 6; j++) {

                console.log(plateau[i][j] + " " + i + " " + j);

            }
        }

    };

// public methods
};
