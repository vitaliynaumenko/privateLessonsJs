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

const step = counter(value => value*2);

step(); //0
step(); //1
step(); //2


