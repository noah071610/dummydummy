export const postalCodeGenerator = () => {
  let answer = '';
  const firstCode = Math.floor(Math.random() * 7);
  for (let i = 0; i < 6; i++) {
    if (i <= 1) {
      if (i === 0) {
        answer += firstCode;
      } else {
        if (firstCode === 6) {
          Math.floor(Math.random() * 3);
        } else {
          Math.floor(Math.random() * 10);
        }
      }
    } else {
      answer += Math.floor(Math.random() * 10);
    }
  }
  return answer;
};
