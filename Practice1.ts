class Practice {
    x : number;
    y : number;
    draw(){
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y)
    }
}
let prac = new Practice();
prac.x = 3;
prac.y = 5;
prac.draw();