var Practice = /** @class */ (function () {
    function Practice(x, y) {
        this.x = x;
        this.y = y;
    }
    Practice.prototype.draw = function () {
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y);
    };
    return Practice;
}());
var prac = new Practice(3, 5);
prac.draw();
