import _ from "lodash"
import toQuery from "#helpers/toQuery";

const signature = (params, keys) => {

  if (_.has(params, "timestamp"))
    params['timestamp'] = Date.now()

  if (!params.hasOwnProperty('recvWindow'))
    params['recvWindow'] = 60000;

  const query = toQuery(params);

  return crypto.createHmac()

}
