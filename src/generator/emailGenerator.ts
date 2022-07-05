import { englishWords } from '@resource/english';
import { domains } from '@resource/options';

export const emailGenerator = () => {
  const num = Array.from(
    { length: Math.floor(Math.random() * (7 - 3) + 3) },
    () => Math.floor(Math.random() * 10)
  );
  return (
    englishWords[Math.floor(Math.random() * englishWords.length)] +
    num.join('') +
    '@' +
    englishWords[Math.floor(Math.random() * englishWords.length)] +
    domains[Math.floor(Math.random() * domains.length)]
  );
};
