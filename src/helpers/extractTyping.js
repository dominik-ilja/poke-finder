export default function extractTyping(types) {
  return types.map(type => type.type.name);
}
