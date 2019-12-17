var num = Math.floor(Math.random()*200);
var i = 0;

var str = prompt('Entrez le nombre : ');
var str2=0;

while (str != num)
{
    if(str > num){
        str2 = prompt('Lower');
    }
    else if(str < num)
    {
        str2 = prompt('Upper');
    }
    str = str2;
}

alert('Bravo !');