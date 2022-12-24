export default class Consumet {
    endpoint;
    constructor(consumet_endpoint) {
        const endpoint = consumet_endpoint || process.env.CONSUMET_ENDPOINT;
        if (!endpoint)
            throw new Error("Consumet endpoint is not defined");
        this.endpoint = endpoint;
    }
}
