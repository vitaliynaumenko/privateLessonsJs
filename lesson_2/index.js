let count = 0;
function step (f){
    (function (){
       count = count+1;
       f(count)
})();
}
const f = function (value) {
    return value*2
}
step(f);
step(f);
step(f);
