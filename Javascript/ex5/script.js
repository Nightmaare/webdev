function sommeIndetermine() {
    var somme = 0;
    for(var i = 0;i< arguments.length;i++)
    {
        somme+=arguments[i];
    }
    return somme;
}

var a = 12;
var b = 34;
var c = 56;
var d = 78;
var e = 90;
 
document.writeln("Variables définies:");
document.writeln("<br>");
document.writeln("-------------------");
document.writeln("<br>");
document.writeln("a = "+a);
document.writeln("<br>");
document.writeln("b = "+b);
document.writeln("<br>");
document.writeln("c = "+c);
document.writeln("<br>");
document.writeln("d = "+d);
document.writeln("<br>");
document.writeln("e = "+e);
document.writeln("<br>");
document.writeln("a + b est :" + sommeIndetermine(a, b));
document.writeln("<br>");
document.writeln("a + b + c + d est :" + sommeIndetermine(a, b, c, d));
