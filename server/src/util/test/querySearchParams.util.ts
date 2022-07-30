export const querySearchParams = (obj: { [key: string]: any }) => {
  let getPairs = (obj, keys = []) =>
    Object.entries(obj).reduce((pairs, [key, value]) => {
      if (typeof value === 'object')
        pairs.push(...getPairs(value, [...keys, key]));
      else
        pairs.push([[...keys, key], value]);
      return pairs;
    }, []);

  const query = getPairs(obj)
    .map(([[key0, ...keysRest], value]) =>
      `${key0}${keysRest.map(a => `[${a}]`).join('')}=${value}`)
    .join('&');

  return query
}
