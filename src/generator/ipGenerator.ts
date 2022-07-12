const types = [
  '192.168.0.X',
  '172.16.X.X',
  '118.235.X.X',
  '223.32.X.X',
  '223.63.X.X',
  '39.7.X.X',
];

export const ipGenerator = () => {
  const ipAddressCase = types[Math.floor(Math.random() * types.length)];
  let answer = '';
  for (let i = 0; i < ipAddressCase.length; i++) {
    if (ipAddressCase[i] === 'X') {
      answer += Math.floor(Math.random() * (256 - 1) + 1);
    } else {
      answer += ipAddressCase[i];
    }
  }
  return answer;
};
