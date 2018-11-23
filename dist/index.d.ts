export declare class DNSUpdator {
    username: string;
    password: string;
    constructor(username: string, password: string);
    update(hostname: string, myip: string): Promise<string>;
}
