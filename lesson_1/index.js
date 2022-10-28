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
            c: {
                c1: [8, 9, 4]
            },
            s: 20,
            g: false,
            v: '1020',
            f: 'kds123j',
            floatVal: '1123.678'
        }
        this.arr = [];

    }
    checkPropertiesNode(node = this.obj){

        for(let key in node){

            let values = node[key];

            if(typeof values === 'number'){
                this.arr.push(values);

            } else if(Array.isArray(values)){
                this.arr.push(...values);

            } else if (typeof values === 'string'){
                const num = parseInt(values, 10);
                if (!isNaN(num)){
                    this.arr.push(num)
                }

            }else if(typeof values === 'object'){

                this.checkPropertiesNode(values);

            }

        }

        return this;

    }

    filterElementsArray(){
        return [...this.arr.filter(item => typeof item === 'number')];
    }

    getSumArrayElements(){
        const sum = this.filterElementsArray().reduce((acc, value)=> acc + value, 0);
        return this
    }

}
new CalculateSumInArrayOfObject()
    .checkPropertiesNode()
    .getSumArrayElements()
