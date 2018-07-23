export default function getParams(props = {}) {
  if (!props.match) {
    return {};
  }
  return props.match.params || {};
}
