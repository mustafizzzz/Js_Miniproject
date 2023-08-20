//Date as object

let x = new Date();
let y = new Date("november 15 2021 2:45:55");
let z = y.setDate(x.getDate() - 10);
if (z > x) {
    console.log("Z is greater: ", z);
} else {
    console.log("X is greater: ", x);
}
console.log("Date of y is: ", y);