type NumberRange = 'tall' | 'age' | 'random';

function priceToString(price: any) {
  const parts = price.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
export const numberRangeGenerator = (
  type: NumberRange,
  range: number[],
  isComma?: boolean
) => {
  const [min, max] = range;
  let answer = Math.floor(Math.random() * (max + 1 - min) + min).toString();
  switch (type) {
    case 'tall':
      answer += 'cm';
      break;
    case 'age':
      answer += '세';
      break;
  }
  if (isComma) {
    return answer.length < 4
      ? answer + '0'.repeat(4 - answer.length)
      : priceToString(answer);
    // .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return isNaN(Number(answer)) ? answer : parseInt(answer);
  }
};
