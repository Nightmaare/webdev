var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML);

alert(queryAll.length);
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML);