var a = 1;
var b = 2;
var c = a+b;

var query = document.getElementById("field");
var query2 = document.getElementById("field2");


query.innerHTML = 'Le type de a est : '+typeof(a)+'et sa valeur est : '+a+'.<br>Le type de b est : '+typeof(b)+'et sa valeur est : '+b+'.<br>Le type de c est : '+typeof(c)+'et sa valeur est : '+c+'.<br>';

a = 1.2;
b = 4.3;
c = a+b;

query2.innerHTML = 'Le type de a est : '+typeof(a)+'et sa valeur est : '+a+'.<br>Le type de b est : '+typeof(b)+'et sa valeur est : '+b+'.<br>Le type de c est : '+typeof(c)+'et sa valeur est : '+c+'.<br>';

