var Member1 =
{
    id : 1,
    name : 'jims',
    grade : 19,
    toString : function() {
        return ('id : '+this.id+' Name : '+this.name+' Grade : '+this.grade);
    }
};
var Member2 =
{
    id : 2,
    name : 'jimsa',
    grade : 18,
    toString : function() {
        return ('id : '+this.id+' Name : '+this.name+' Grade : '+this.grade);
    }
};
var Member3 =
{
    id : 3,
    name : 'jimso',
    grade : 17,
    toString : function() {
        return ('id : '+this.id+' Name : '+this.name+' Grade : '+this.grade);
    }
};

var team = [
    Member1,Member2,Member3
];

var Team =
{
    list : team
};


console.log(Member1.toString());

console.log(team);

console.log(Team);

