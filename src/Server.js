import express from "express"
import loadEnv from "#src/helpers/loadEnv";



class Server {
  constructor() {
    this.server = express();
    this.port  = process.env.PORT || 5000;
  };

  configuration() {
    loadEnv();
  }

  start() {
    this.server.listen(this.port, () => console.log(`Server is Running on PORT ${this.port}`))
  }
};


export default new Server();
