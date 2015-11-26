'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var a = new Engine();
//a.init();

PalettoTestCase.prototype.testStory1 = function () {

    a.juxtaposition();

};
PalettoTestCase.prototype.testStory2 = function () {

    assertTrue(a.firstmove_player1());

};
PalettoTestCase.prototype.testStory3 = function () {

    assertTrue(a.check_player_1()[0] === 1);

};
PalettoTestCase.prototype.testStory4 = function () {

    assertTrue(a.check_voisin(0, 0));
    assertTrue(a.move_player2(0, 0, "noir"));
    assertTrue(a.check_voisin(5, 5));
    assertTrue(a.move_player2(5, 5, "noir"));

    //a.display_care();

};
PalettoTestCase.prototype.testStory5 = function () {



   // assertTrue(a.check_Connection(2,2));




};

PalettoTestCase.prototype.testStory6and7 = function () {



    // assertTrue(a.check_Connection(2,2));



    // la fonction check_win doit etre après après chaque coups , elle verifie la couleur jouer par le joueur , si il ne reste plus de coupleur le dernier joueur à gagner




};
