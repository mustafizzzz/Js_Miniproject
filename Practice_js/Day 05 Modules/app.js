// let name = "mustafiz ansari"


// import { name } from ./location

import { name, code, withdrawl as wd, default as df } from "./Modules/User.js";
import * as acc from "./Modules/account.js";

console.log("name:", name, " ");
code();

acc.withdrawl();
acc.deposit();
console.log("acc type", acc.acc_type)
wd();
df();