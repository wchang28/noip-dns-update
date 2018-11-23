import * as request from "superagent";

export class DNSUpdator {
    constructor(public username: string, public password: string) {
    }
    async update(hostname: string, myip: string) {
        let url = "https://dynupdate.no-ip.com/nic/update";
        let res = await request.get(url).auth(this.username, this.password).query({hostname, myip}).timeout(15000);
        if (    res.status === 200
            &&  typeof res.header["content-type"] === "string"
            &&  (res.header["content-type"] as string).indexOf("text/plain") !== -1
            &&  res.text
            ) {
            return res.text;
        } else {
            throw `unable to update dns from ${url}`;
        }         
    }
}