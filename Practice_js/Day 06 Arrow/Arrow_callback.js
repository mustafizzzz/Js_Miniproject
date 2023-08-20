//arrow
let sum = (a, b) => {
    return (a + b)
}

console.log("Sum is :", sum(10, 20));

let multi = (m) => 2 * m
console.log("Multiply is: ", multi(2));


//Call back

function say() {
    console.log("hello world");
}

function sayhi() {
    console.log("hi.....");
}

function cal(x, y, callback) {
    console.log(x + y);
    callback();
}
cal(50, 100, sayhi)
cal(100, 200, () => {
    console.log("Iam a Function");
})

//Map function

let arr1 = [1, 2, 3, 4,]
console.log("Before map:", arr1);

let arr2 = arr1.map((elem) => elem * 3)
console.log("After Map:", arr2);


//filter

let team = [
    {
        name: "Mustafiz",
        Branch: "IT"
    },
    {
        name: "Samuel",
        Branch: "IT"
    },
    {
        name: "chris",
        Branch: "Exct"
    },
    {
        name: "Omkar",
        Branch: "Mech"
    },
    {
        name: "Vyogesh",
        Branch: "cmpn"
    },
    {
        name: "Vivian",
        Branch: "ELec"
    },
]

let SEIT = team.filter((val) => val.Branch == "IT");
console.log(SEIT);

