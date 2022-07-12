function priceToString(price: any) {
  const parts = price.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export const priceRangeGenerator = (
  range: number[],
  option?: {
    gap?: 10 | 100 | 1000 | 10000 | 100000;
    comma?: boolean;
    suffix?: string;
    prefix?: string;
  }
) => {
  let { gap, comma, suffix, prefix } = option ?? {};
  const [min, max] = range;
  gap = gap ?? 100;
  let target = Math.floor(Math.random() * (max + 1 - min) + min);
  let answer =
    (prefix ?? '') + String(Math.round(target / gap) * gap) + (suffix ?? '');
  if (gap > max) return 0;
  return comma
    ? priceToString(answer)
    : // .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      answer;
};
