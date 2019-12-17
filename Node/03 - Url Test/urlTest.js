var url = require('url');
var adr = 'http://localhost:8122/index.html?year=2019&month=December';
var q = url.parse(adr,true);

console.log('host : '+q.host);
console.log('pathname : '+q.pathname);
console.log('search : '+q.search);

var qdata = q.query;
console.log(qdata);
console.log(qdata.month);