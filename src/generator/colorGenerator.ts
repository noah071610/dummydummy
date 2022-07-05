const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colors = [
  '검은색',
  '진회색',
  '은색',
  '횐색',
  '빨간색',
  '분홍색',
  '자홍색',
  '산호색',
  '장미색',
  '와인색',
  '진홍색',
  '귤색',
  '복숭아색',
  '버건디색',
  '주홍색',
  '자두색',
  '보라색',
  '자주색',
  '노란색',
  '겨자색',
  '레몬색',
  '금색',
  '황토색',
  '갈색',
  '크림색',
  '상아색',
  '베이지색',
  '황갈색',
  '구리색',
  '고동색',
  '살구색',
  '초록색',
  '연두색',
  '연초록',
  '에메랄드색',
  '청록색',
  '파란색',
  '코발트색',
  '하늘색',
  '네이비색',
  '인디고색',
];
function getHex() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  return hex;
}
function getRGBA() {
  return `rgba(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${(Math.random() * 11).toFixed(1)})`;
}

export const colorGenerator = (format: 'hex' | 'ko' | 'rgba') => {
  return format === 'hex'
    ? getHex()
    : format === 'rgba'
    ? getRGBA()
    : colors[Math.floor(Math.random() * colors.length)];
};
