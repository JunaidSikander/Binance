import server from "#src/Server";
import Binance from "#src/binnace/main";



server.configuration()
server.start();

const binance = new Binance();

// console.log(await binance.testConnectivity())
// console.log(await binance.serverTime())
console.log(await binance.systemStatus())
