"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var username = process.argv[2];
var passord = process.argv[3];
var hostname = process.argv[4];
var myip = process.argv[5];
if (!username) {
    console.error("username is missing");
    process.exit(1);
}
if (!passord) {
    console.error("passord is missing");
    process.exit(1);
}
if (!hostname) {
    console.error("hostname is missing");
    process.exit(1);
}
if (!myip) {
    console.error("myip is missing");
    process.exit(1);
}
console.log("username=" + username);
console.log("passord=" + passord);
console.log("hostname=" + hostname);
console.log("myip=" + myip);
var updator = new _1.DNSUpdator(username, passord);
updator
    .update(hostname, myip)
    .then(function (ret) {
    console.log("" + ret);
    process.exit(0);
}).catch(function (err) {
    console.error("!!! Error: " + JSON.stringify(err));
    process.exit(1);
});
//# sourceMappingURL=test.js.map