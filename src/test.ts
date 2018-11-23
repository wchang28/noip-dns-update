import {DNSUpdator} from "./";

let username = process.argv[2];
let passord = process.argv[3];
let hostname = process.argv[4];
let myip = process.argv[5];

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

console.log(`username=${username}`);
console.log(`passord=${passord}`);
console.log(`hostname=${hostname}`);
console.log(`myip=${myip}`);

let updator = new DNSUpdator(username, passord);
updator
.update(hostname, myip)
.then((ret: string) => {
    console.log(`${ret}`);
    process.exit(0);
}).catch((err: any) => {
    console.error(`!!! Error: ${JSON.stringify(err)}`);
    process.exit(1);
})