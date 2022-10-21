class CalculateSumInArrayOfObject{
    constructor() {
        this.obj = {
                a: {
                    a1:[1, 2, 3],
                    a2: [4, false, 8]
                },
                b: {
                    b1: [],
                    b2: [{}, [], () => {}]
                },
                c: { c1: [8, 9, 4] }
        }
        this.arr = []
        this.arrNumbers = []
    }
    checkPropertiesOnArray(){
        for(let i in this.obj){
            for(let j in this.obj[i]){
                if (!Array.isArray(this.obj[i][j])) return;
                this.arr.push(...this.obj[i][j]);
                this.deleteReferenceType(this.obj[i][j]);
            }
        }
        return this;
    }
    checkElementsArrIsNumber(){
         this.arrNumbers =  [...this.arr.filter(item=> typeof item === 'number')];

        return this;
    }

    getSumArrayElements(){
      const sum = this.arrNumbers.reduce((acc, value)=> acc + value, 0);
        console.log(sum);

        return this
    }

    deleteReferenceType (arr){

     const res = arr.reduce((acc,item, arr)=> {

         if(item instanceof Object) return
         acc.push(item)
         return acc
     },[])
        console.log(res);
        return res;
    }

}
new CalculateSumInArrayOfObject()
    .checkPropertiesOnArray()
    .checkElementsArrIsNumber()
    .getSumArrayElements()
