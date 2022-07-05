import { englishWords } from '@resource/english';
import { domains } from '@resource/options';

export const linkGenerator = (protocol = true) => {
  return `${protocol ? 'https://' : ''}${
    Math.floor(Math.random() * 3) === 2 ? 'www.' : ''
  }${englishWords[Math.floor(Math.random() * englishWords.length)]}${
    domains[Math.floor(Math.random() * domains.length)]
  }`;
};
