class Practice {
    constructor(private x? : number,private y? : number){
    }
    draw(){
        console.log('X = ' + this.x + ' ' + 'Y = ' + this.y);
    }
    get X(){
        return this.x;
    }
    set X(value){
        if(value < 0)
            throw new Error('value can not be less than 0');
                
        this.x=value;
    }
}

let prac = new Practice();
let getpx = prac.X;
prac.X=3;
// prac.draw();