function counter (f){
    let count = 0;
     return function (){
        f(count);
         displayCount(count);
         count++
         return count
     }
}

function displayCount(count) {
    console.log(count);
}

const step = counter(f);
function f (value) {
    return value*2
}
step();
step();
step();


