import { lorem } from '@resource/lorem';

export const loremGenerator = (isLong?: boolean) => {
  if (!isLong) {
    return lorem[Math.floor(Math.random() * lorem.length)];
  } else {
    let copy = [...lorem];
    let i = 3;
    const arr: string[] = [];
    while (i) {
      const target = copy[Math.floor(Math.random() * copy.length)];
      copy = copy.filter((v) => v !== target);
      arr.push(target + '\n');
      i--;
    }
    return arr.join(' ');
  }
};
