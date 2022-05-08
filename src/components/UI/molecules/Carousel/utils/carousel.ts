export const makeIndices = (start: number, delta: number, num: number) => {
  const indices: Array<number> = [];
  while (indices.length < num) {
    indices.push(start);
    start += delta;
  }

  return delta > 0 ? indices : indices.reverse();
};
