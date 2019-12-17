const fs = require('fs'),
    path = './file.json';

console.log('debut');

var cpy = 'text';

const readClbk = (err,data) =>{
    cpy = data;
    fs.writeFile('./copy.json',cpy,writeClbck);
    console.log('reading....');
}

const writeClbck=(err)=>{
    console.log('end write');
}

//fs.readFile('./file.json',readClbk);
fs.readFile('./file.json',readClbk);

console.log('End');