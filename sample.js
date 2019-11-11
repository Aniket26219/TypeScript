"use strict";
exports.__esModule = true;
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
exports.Practice = Practice;
