import request from "#services/request";

export default class Binance {
  constructor(options) {
  };

  async testConnectivity() {
    try {
      const {data, status} = await request.TestConnectivity();
      return {data, status};
    } catch (e) {
      console.log(`Error in testConnectivity()`, e?.message);
    }
  }

  async serverTime() {
    try {
      const {data, status} = await request.GetServerTime();
      return {data, status};
    } catch (e) {
      console.log(e.response.status)
      console.log(`Error in serverTime()`, e?.message);
      return e.message
    }
  }

  async systemStatus() {
    try {
      const {data, status} = await request.GetSystemStatus();
      return {data, status};
    } catch (e) {
      console.log(e.response.status)
      console.log(`Error in serverTime()`, e?.message);
      return e.message
    }
  }
}
