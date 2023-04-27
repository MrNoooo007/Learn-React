// Enhanced object literals
let name = "DSA"
let cost = 1000;

let course = {
    name,
    cost,
    getName: function() {
        return this.name;
    }
}

// spead operator

function logger(a,b,...params) {
    console.log(a);
    console.log(b);
    console.log(params);
}

logger(1,2,3,4)


