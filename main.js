// Enhanced object literals
let cost = 1000;


// spead operator

function logger(a,b,...params) {
    console.log(a);
    console.log(b);
    console.log(params);
}

// logger(1,2,3,4)


let myArr = [1,2,3]

let [a,c,b] = myArr;

let tus = {
    price: 100,
    child: {
        nameTus: "React"
    }
}

let { price, child: { nameTus } } = tus;

console.log(price)
console.log(child)

