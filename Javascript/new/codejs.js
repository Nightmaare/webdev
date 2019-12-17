/*function Vector(x,y){
    this.x = x;
    this.y = y;

};

Vector.prototype.mod = function(){
     return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vector.prototype.egale = function(v){
    if(this.x == v.x) return true;
    else return false;
}

let v1 = new Vector(2,4);
let v2 = new Vector(3,4);

console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));
*/

class Vector
    {
        constructor(x,y)
        {
            this.x = x;
            this.y = y;
        }
        mod()
        {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
        
        egale(v)
        {
            if(this.x == v.x) return true;
            else return false;
        }
    

    }


let v1 = new Vector(2,4);
let v2 = new Vector(3,4);

console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));

