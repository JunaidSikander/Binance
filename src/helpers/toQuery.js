import buildParams from "#helpers/buildParams";

export default function toQuery(params) {
  return buildParams('?', params);
}
