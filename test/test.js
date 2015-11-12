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
