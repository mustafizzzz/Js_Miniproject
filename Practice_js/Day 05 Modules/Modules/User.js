

// function test(name) {
//     console.log("Hello world", name);

// }
import { deposit } from "./account";
deposit();
export default function () {
    console.log("Iam a user default");
}
export let name = "Mustafiz"
let age = 21

export function code() {
    console.log("coding....in users");

}

function cooking() {
    console.log("cooking..in users");

}
function withdrawl() {
    console.log("Withdrawl from users");

}

export { withdrawl }