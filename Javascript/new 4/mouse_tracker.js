const c = document.querySelector(".circle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);

function getCord(e) {
    var x = window.innerWidth-(e.clientX) + "px";
    var y = window.innerHeight-(e.clientY) + "px";
    c.style.top = y;
    c.style.left = x;
    console.log(x, y);
    return [x, y];
}

document.addEventListener("mousemove", getCord);