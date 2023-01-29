export default function buildParams(prefix, val, top) {
  if (_.isUndefined(top)) top = true;

  if (_.isArray(val)) {
    return _.map(val, (value, key) => buildParams(top ? key : prefix + '[]', value, false)).join('&')
  } else if (_.isObject(val)) {
    return _.map(val, (value, key) => buildParams(top ? key : prefix + '[' + key + ']', value, false)).join('&')
  } else {
    return encodeURIComponent(prefix) + '=' + encodeURIComponent(val)
  }
}


