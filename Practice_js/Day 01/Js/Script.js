//object

let info = {

    fname: "Mustafiz",
    lname: "Ansari",
    Id: "211003",
    greet: function () {
        console.log("my name is " + this.fname + " " + "My car is: " + brand.car);
    }
}
document.write(info.fname);

let greet = function () {
    console.log("my name is ", info.fname);
}
let brand = {
    car: "Creta",
    model: "Top notch"
}

info.class = "A";
info.sayHellow = greet;
info.sayHellow();
info.greet();






