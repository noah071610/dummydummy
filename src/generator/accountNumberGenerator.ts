const types = [
  'XXXX-XXX-XXXXXX',
  'XXXXXX-XX-XXXXXX',
  'XXX-XXX-XXXXXX',
  'XXXX-XX-XXXXXXX',
];

export const accountNumberGenerator = () => {
  const accountNumberCase = types[Math.floor(Math.random() * 4)];
  let answer = '';
  for (let i = 0; i < accountNumberCase.length; i++) {
    if (accountNumberCase[i] === 'X') {
      answer += Math.floor(Math.random() * (9 - 1) + 1);
    } else {
      answer += '-';
    }
  }
  return answer;
};
