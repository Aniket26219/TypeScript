var Practice = /** @class */ (function () {
    function Practice(x, y) {
        this.x = x;
        this.y = y;
    }
    Practice.prototype.draw = function () {
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y);
    };
    Object.defineProperty(Practice.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value can not be less than 0');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Practice;
}());
var prac = new Practice();
var getpx = prac.X;
prac.X = 3;
// prac.draw();
