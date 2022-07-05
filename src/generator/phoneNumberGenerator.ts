const regionalNum = [
  '02',
  '031',
  '032',
  '033',
  '041',
  '042',
  '043',
  '044',
  '051',
  '052',
  '053',
  '054',
  '055',
  '061',
  '062',
  '063',
  '064',
];
export const phoneNumberGenerator = (isRegional?: boolean) => {
  let num = '-XXXX';
  if (isRegional) {
    num =
      `${regionalNum[Math.floor(Math.random() * regionalNum.length)]}-XXX` +
      num;
  } else {
    num = '010-XXXX' + num;
  }
  let answer = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 'X') {
      answer += Math.floor(Math.random() * 10);
    } else {
      answer += num[i];
    }
  }
  return answer;
};
