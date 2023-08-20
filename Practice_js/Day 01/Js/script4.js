//constructor


//normal object
let info = {
    name: "Mustafiz",
    work: "IT specialist",
    age: "27",
    cla: "SE",
    address: {
        city: "Mumbai",
        state: "maha",
        country: "India",
        phone: {
            homenum: "10",
            officenum: "10",
            take: function () {
                return this.name + " country is " + this.country;//can acess upper declare
            }
        }
    }
}
console.log(info);
console.log(info.address);
console.log(info.address.phone);
console.log(info.address.phone.take());

//For making 10 object simultaneously use constructor

function Student(name, work, age, cla) {
    this.name = name;
    this.work = work;
    this.age = age;
    this.cla = cla;

    //intervalid for all
    // this.nationality = "Indian";
    // this.set = function () {
    //     return this.name + " " + this.age;

    // };
}

let std1 = new Student("Ashwin", "Baniya", "22", "TE");
console.log(std1);

//for adding dynamic in obj the
std1.lastname = "Gupta";
console.log(std1);

//if want to add in cobstructor

Student.prototype.nationality = "Indian"; //not valid

Student.prototype.name = function () {
    return this.age;
}
let std2 = new Student("Vivian", "Networks", "22", "TE");
console.log(std2);
console.log(std2.age);



