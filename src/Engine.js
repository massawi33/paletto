

var Engine = function () {
    'use strict';
// private attributes and methods
    //var plateau = new Array(6);

    var player_1 = new Array(6);// 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
    var player_2 = new Array(6);// 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
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

                if (plateau[i][j] === plateau[i + 1][j] && plateau[i][j] !== "empty") {

                    throw "Error";


                }

            }
        }
        for (i = 0; i < 6; i++) {


            // test Vertical
            for (j = 0; j < 5; j++) {

                if (plateau[j][i] === plateau[j + 1][i] && plateau[j][i] !== "empty" ) {

                    throw "Error";


                }

            }
        }

    };
    this.check_player_1 = function(){

        return player_1;

    };
    this.check_player_2 = function(){

        return player_2;

    };
    this.move_player2 =function(a , b , color){
        //var found = -1;
        if(plateau[a][b] === color){

            plateau[a][b] = "empty";
            // 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
            if (color === "jaune") {
                player_2 [0] = player_2 [0] + 1;
            }else if (color === "noir") {
                player_2 [1] = player_2 [1] + 1;
            }else if (color === "rouge") {
                player_2 [2] = player_2 [2] + 1;
            }else if (color === "bleu") {
                player_2 [3] = player_2 [3] + 1;
            }else if (color === "blanc") {
                player_2 [4] = player_2 [4] + 1;
            }else if (color === "vert") {
                player_2 [5] = player_2 [5] + 1;
            }

                return true;

        }else {
            return false;
        }






    };
    /*this.firstmove_player2= function(){

        var found = -1;
        if(plateau[0][0] === "noir"){

            plateau[0][0] = "empty";
            player_2 [0] = player_2 [0] + 1;


        }else if(plateau[1][5] === "noir"){

            plateau[0][5] = "empty";
            player_2 [0] = player_2 [0] + 1;


        }else if(plateau[5][5] === "noir"){

            plateau[5][5] = "empty";
            player_2 [0] = player_2 [0] + 1;


        }else if (plateau[5][0] === "noir"){

            plateau[0][0] = "empty";
            player_2 [0] = player_2 [0] + 1;



        }
        if (found !== -1 ) {

            return true;
        }
        return false;

    };*/
    this.firstmove_player1 = function(){

        if(plateau[0][0] === "jaune"){

            plateau[0][0] = "empty";
            player_1 [0] = 1;
            return true;

        }else if(plateau[0][5] === "jaune"){

            plateau[0][5] = "empty";
            player_1 [0] = 1;
            return true;

        }else if(plateau[5][5] === "jaune"){

            plateau[5][5] = "empty";
            player_1 [0] = 1;
            return true;

        }else if (plateau[5][0] === "jaune"){

            plateau[5][0] = "empty";
            player_1 [0] = 1;
            return true;


        }else {
            return false;
        }




        };
    this.display_care = function(){

        for (i = 0; i < 6; i++) {



            for (j = 0; j < 6; j++) {

                console.log(plateau[i][j] + " " + i + " " + j);

            }
        }

    };

// public methods
};
