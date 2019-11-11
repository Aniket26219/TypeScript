class Practice{
    x : number;
    y : number;
    constructor(x : number, y : number){
        this.x=x;
        this.y=y;
    }
    draw(){
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y);
    }
}
let prac = new Practice(3,5);
prac.draw();