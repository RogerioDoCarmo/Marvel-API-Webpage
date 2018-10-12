document.onkeypress = function(ev) {
    alert(ev.keycode);
}

document.addEventListener("auxclick",function(par){
    console.log(par.x);
    alert(par.x);
});
