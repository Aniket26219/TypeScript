var Practice = /** @class */ (function () {
    function Practice() {
    }
    Practice.prototype.draw = function () {
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y);
    };
    return Practice;
}());
var prac = new Practice();
prac.x = 3;
prac.y = 5;
prac.draw();
