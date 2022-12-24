import { General } from "../types/General";

export default class Consumet implements General.Consumet {
  endpoint: string;

  constructor(consumet_endpoint?: string) {
    const endpoint = consumet_endpoint || process.env.CONSUMET_ENDPOINT;
    if (!endpoint) throw new Error("Consumet endpoint is not defined");
    this.endpoint = endpoint;
  }
}
