const type = 'XXXX-XXXX-XXXX-XXXX';

export const creditCardNumberGenerator = () => {
  let answer = '';
  for (let i = 0; i < type.length; i++) {
    if (type[i] === 'X') {
      answer += Math.floor(Math.random() * (9 - 1) + 1);
    } else {
      answer += '-';
    }
  }
  return answer;
};
