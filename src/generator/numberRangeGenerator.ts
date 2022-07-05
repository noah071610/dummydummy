type NumberRange = 'height' | 'age' | 'random';

export const numberRangeGenerator = (type: NumberRange, range: number[]) => {
  const [min, max] = range;
  const answer = Math.floor(Math.random() * (max + 1 - min) + min);
  switch (type) {
    case 'height':
      return answer + 'cm';
    case 'age':
      return answer + '세';
    case 'random':
      return answer;
    default:
      break;
  }
};
