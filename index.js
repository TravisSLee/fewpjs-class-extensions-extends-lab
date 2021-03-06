class Polygon {
    constructor(arr){
        this.arr = arr
    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        let total = this.arr.reduce(reducer)
        return total
    } 
}

class Triangle extends Polygon {
    get isValid(){
        return (this.countSides === 3 && 
            this.arr[0] + this.arr[1] > this.arr[2] &&
            this.arr[1] + this.arr[2] > this.arr[0] &&
            this.arr[2] + this.arr[0] > this.arr[1])
    }
}