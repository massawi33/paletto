

var Engine = function () {
    'use strict';
// private attributes and methods
    //var plateau = new Array(6);

    var player_1 = new Array(6), player_2 = new Array(6), i, j, last_player, plateau, winner;// 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
    // 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
    plateau = [["noir", "vert", "blanc", "bleu", "rouge", "blanc"],
        ["jaune", "blanc", "vert", "rouge", "jaune", "bleu"],
        ["bleu", "jaune", "bleu", "blanc", "noir", "rouge"],
        ["rouge", "noir", "rouge", "vert", "bleu", "blanc"],
        ["blanc", "vert", "jaune", "noir", "jaune", "vert"],
        ["jaune", "bleu", "noir", "rouge", "vert", "noir"]];

    /*this.init = function() {
        for (i = 0; i < 6; i++) {

            plateau[i] = new Array(6);

            for (j = 0; j < 6; j++) {

                plateau[i][j] = "empty";

            }
        }

    };*/
    this.juxtaposition = function () {

        // test horisontal
        for (i = 0; i < 5; i = i + 1) {



            for (j = 0; j < 6; j = j + 1) {

                if (plateau[i][j] === plateau[i + 1][j] && plateau[i][j] !== "empty") {

                    throw "Error";


                }

            }
        }
        for (i = 0; i < 6; i = i + 1) {


            // test Vertical
            for (j = 0; j < 5; j = j + 1) {

                if (plateau[j][i] === plateau[j + 1][i] && plateau[j][i] !== "empty" ) {

                    throw "Error";


                }

            }
        }

    };
    this.check_left = function (a, b) {
        if (plateau[a][b + 1] !== "empty") {

            return true;
        } else {
            return false;
        }

    }
    this.check_right = function (a, b) {
        if(plateau[a][b - 1] !== "empty" ){

            return true;
        } else {
            return false;
        }

    };
    this.check_botom = function(a, b){

        if(plateau[a - 1][b] !== "empty" ){

            return true;
        } else {
            return false;
        }

    };

    this.check_top = function(a, b){

        if(plateau[a + 1][b] !== "empty" ){

            return true;
        } else {
            return false;
        }

    };

    this.check_Connection = function (a, b) {


        if ((plateau[a][b + 1] === "empty" && plateau[a][b - 1] === "empty") && ( plateau[a + 1][b] === "empty" && plateau[a + 1][b] === "empty")) {

            return false;


        } else if (plateau[a + 1][b] === "empty" && plateau[a + 1][b] === "empty" ) {

            return false;

        } else {

            return true;
        }


    };
    this.check_win_plateau = function(couleur) {

        for (i = 0; i < 5; i = i + 1) {



            for (j = 0; j < 6; j = j + 1) {

                if (plateau[i][j] === couleur ) {

                   return false;


                }

            }
        }
        return true;


    };
    this.check_voisin = function (a, b) {

        var check = 0;
        if (a === 5 && b === 5) {

            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }

            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {

                return false;

            }else {
                return true;
            }

        }else if (a === 0 && b === 0) {
            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }

            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }


            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (a === 0 && b === 5) {

            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }
            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }


            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (a === 5 && b === 0) {
            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }


            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (a === 5) {
            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }
            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }

            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (a === 0) {
            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }
            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }
            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }


            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (b === 5) {

            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }
            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }
            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else if (b === 0) {
            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }

            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }
            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {

                return false;

            } else {

                return true;
            }
        } else {

            if (plateau[a][b + 1] !== "empty") {
                check = check + 1;
            }

            if (plateau[a][b - 1] !== "empty") {

                check = check + 1;

            }
            if (plateau[a + 1][b] !== "empty") {

                check = check + 1;
            }
            if (plateau[a - 1][b] !== "empty") {

                check = check + 1;
            }

            if (check > 2) {
                return false;
            } else {

                return true;
            }

        }


    };
    this.check_player_1 = function () {

        return player_1;

    };
    this.check_player_2 = function () {

        return player_2;

    };
    this.move_player1 = function (a, b, color) {
        //var found = -1;
        if (plateau[a][b] === color) {

            plateau[a][b] = "empty";
            this.juxtaposition();
            // 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
            if (color === "jaune") {
                player_1[0] = player_1[0] + 1;
            } else if (color === "noir") {
                player_1[1] = player_1[1] + 1;
            } else if (color === "rouge") {
                player_1[2] = player_1[2] + 1;
            } else if (color === "bleu") {
                player_1[3] = player_1[3] + 1;
            } else if (color === "blanc") {
                player_1[4] = player_1[4] + 1;
            } else if (color === "vert") {
                player_1[5] = player_1[5] + 1;
            }

            return true;

        }else {
            return false;
        }

        last_player = "1";
        if (this.check_win_plateau(color)){

            winner = "1";
        }




    };
    this.move_player2 = function (a, b, color) {
        //var found = -1;
        if(plateau[a][b] === color){

            plateau[a][b] = "empty";
            this.juxtaposition();
            // 0 jaune , 1 noir , 2 rouge , 3 bleu , 4 blanc , 5 vert
            if (color === "jaune") {
                player_2[0] = player_2[0] + 1;
            } else if (color === "noir") {
                player_2[1] = player_2[1] + 1;
            } else if (color === "rouge") {
                player_2[2] = player_2[2] + 1;
            } else if (color === "bleu") {
                player_2[3] = player_2[3] + 1;
            } else if (color === "blanc") {
                player_2[4] = player_2[4] + 1;
            } else if (color === "vert") {
                player_2[5] = player_2[5] + 1;
            }

            return true;

        } else {
            return false;
        }
        last_player = "2";
        if (this.check_win_plateau(color)){

            winner = "2";
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
