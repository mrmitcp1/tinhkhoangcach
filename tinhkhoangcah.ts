class Point {
    x
    y
    constructor(x,y) {
        this.x =x;
        this.y =y;
    }
    name = 'Point'
    distance(b){
        const dx = this.x - b.x;
        const dy = this.y - b.y
        return Math.hypot(dx,dy)
    }


}

let p1=new Point(3,3)
let p2=new Point(4,5)
console.log(p1.distance(p2))
console.log(p1.name)