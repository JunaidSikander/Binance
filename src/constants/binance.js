
export const BINANCE_RESPONSE_ERROR = {
  // Server/Network Errors
  1000: {
    message: "UNKNOWN",
    description: "An unknown error occurred while processing the request."
  },
  1001: {
    message: "DISCONNECTED",
    description: "Internal error; unable to process your request. Please try again."
  },
  1003: {
    message: "TOO_MANY_REQUESTS",
    description: "Too many requests queued.\n" +
      "Too many requests; please use the WebSocket for live updates.\n" +
      "Too many requests; current limit is %s requests per minute. Please use the WebSocket for live updates to avoid polling the API.\n" +
      "Way too much request weight used; IP banned until %s. Please use the WebSocket for live updates to avoid bans."
  },
  1006: {
    message: "UNEXPECTED_RESP",
    description: "An unexpected response was received from the message bus. Execution status is unknown."
  },
  1007: {
    message: "TIMEOUT",
    description: "Timeout waiting for a response from the backend server. Send status unknown; execution status unknown."
  },
  1008: {
    message: "SERVER_BUSY",
    description: "Spot server is currently overloaded with other requests. Please try again in a few minutes."
  },
  1014: {
    message: "UNKNOWN_ORDER_COMPOSITION",
    description: "Unsupported order combination."
  },
  1015: {
    message: "TOO_MANY_ORDERS",
    description: "Too many new orders.\n" +
      "Too many new orders; current limit is %s orders per %s."
  },

}
