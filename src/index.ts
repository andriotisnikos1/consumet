import enime from "./functions/anime/enime/enime.js";
import gogoanime from "./functions/anime/gogoanime/gogoanime.js";
import zoro from "./functions/anime/zoro/zoro.js";
import fs from "fs/promises";


const endpoint = "https://api.consumet.org";
const q = await enime.info("cl6ogc3hf00blaclu0x8m5yww", endpoint)

await fs.writeFile("./test.json", JSON.stringify(q, null, 2))
