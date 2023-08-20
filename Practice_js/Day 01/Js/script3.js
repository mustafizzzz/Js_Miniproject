//getter n setter


let info = {
    name: "Mustafiz",
    work: "IT specialist",
    // getter: function () {
    //     return this.name.toUpperCase();

    // },
    get getname() {
        return this.name.toUpperCase();
    },
    set setname(n) {
        this.name = n.toUpperCase();
    }
}

console.log(info);
console.log(info.getname);
info.setname = "Ashwin";
console.log(info);