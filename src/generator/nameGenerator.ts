import { firstNames, lastNames } from '@resource/names';

export const nameGenerator = (
  type: 'full' | 'first' | 'last' | 'gender' | undefined
) => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const gender = Math.floor(Math.random() * 2 + 1) === 1 ? '남성' : '여성';
  const lastName =
    lastNames[gender][Math.floor(Math.random() * lastNames[gender].length)];
  switch (type) {
    case 'full':
      return `${firstName}${lastName}`;
    case 'first':
      return `${firstName}`;
    case 'last':
      return `${lastName}`;
    case 'gender':
      return `${firstName}${lastName}(${gender})`;
    default:
      return `${firstName}${lastName}`;
  }
};
