import {Server} from "./server.js";
//const Server = require("./server.js");
import { config } from "../config/default.js";

function main(host, port, name){
  const srv = new Server(host, port, name);
  srv.initServer();
}

//main("127.0.0.1", 3000, "api-notes");
main(config.api.host, config.api.port, config.api.app);