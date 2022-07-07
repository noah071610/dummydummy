import { accountNumberGenerator } from '@generator/accountNumberGenerator';
import { addressGenerator } from '@generator/addressGenerator';
import { callGenerator } from '@generator/callGenerator';
import { colorGenerator } from '@generator/colorGenerator';
import { creditCardNumberGenerator } from '@generator/creditCardNumberGenerator';
import { dateGenerator } from '@generator/dateGenerator';
import { emailGenerator } from '@generator/emailGenerator';
import { ipGenerator } from '@generator/ipGenerator';
import { linkGenerator } from '@generator/linkGenerator';
import { nameGenerator } from '@generator/nameGenerator';
import { numberRangeGenerator } from '@generator/numberRangeGenerator';
import { postalCodeGenerator } from '@generator/postalCodeGenerator';
import { priceRangeGenerator } from '@generator/priceGenerator';
import { uuidGenerator } from '@generator/uuidGenerator';
import { banks, creditCardCompanies } from '@resource/account';
import { cities } from '@resource/address';
import { companies } from '@resource/companies';
import { mobileCarrier } from '@resource/contact';
import { artists, dramas, foods, movies, musics } from '@resource/cultures';
import { products } from '@resource/product';
import {
  drinking,
  education,
  gender,
  habit,
  mbti,
  occupations,
  smoking,
  socialMedias,
  universities,
} from 'src/resource/profile';
import { stations } from 'src/resource/stations';

const commentRegExp = new RegExp('//.*\n', 'gm');
const matcherList: {
  key: string;
  list?: any[];
  generator?: (type?: any) => string;
}[] = [
  { key: '$firstName', generator: () => nameGenerator('first') },
  { key: '$lastName', generator: () => nameGenerator('last') },
  {
    key: '$fullName',
    generator: (type?: 'full' | 'first' | 'last' | 'gender') =>
      nameGenerator(type),
  },
  { key: '$product', list: products },
  { key: '$address', generator: addressGenerator },
  { key: '$link', generator: linkGenerator },
  { key: '$city', list: cities },
  { key: '$bank', list: banks },
  { key: '$call', generator: (type?: 'local' | 'num') => callGenerator(type) },
  { key: '$uuid', generator: uuidGenerator },
  { key: '$ip', generator: ipGenerator },
  { key: '$drama', list: dramas },
  { key: '$movie', list: movies },
  { key: '$music', list: musics },
  { key: '$company', list: companies },
  { key: '$region', generator: () => addressGenerator(true) },
  {
    key: '$tall',
    generator: () => numberRangeGenerator('tall', [150, 185]),
  },
  { key: '$age', generator: () => numberRangeGenerator('age', [15, 50]) },
  {
    key: '$number',
    generator: (type?: any) =>
      numberRangeGenerator('random', [0, 100000], type === 'comma'),
  },
  { key: '$university', list: universities },
  { key: '$education', list: education },
  { key: '$station', list: stations },
  { key: '$email', generator: emailGenerator },
  {
    key: '$date',
    generator: (type?: '-' | '/' | 'ko') => dateGenerator(type),
  },
  { key: '$artist', list: artists },
  { key: '$food', list: foods },
  { key: '$drinking', list: drinking },
  { key: '$gender', list: gender },
  { key: '$smoking', list: smoking },
  { key: '$socialMedia', list: socialMedias },
  { key: '$mbti', list: mbti },
  { key: '$creditCardCompany', list: creditCardCompanies },
  { key: '$occupation', list: occupations },
  { key: '$mobileCarrier', list: mobileCarrier },
  {
    key: '$color',
    generator: (type?: 'hex' | 'rgba') => colorGenerator(type),
  },
  {
    key: '$price',
    generator: () =>
      priceRangeGenerator([0, 500000], {
        gap: 1000,
        comma: true,
        suffix: '원',
      }),
  },
  { key: '$habit', list: habit },
  { key: '$postalCode', generator: postalCodeGenerator },
  {
    key: '$accountNumber',
    generator: accountNumberGenerator,
  },
  {
    key: '$creditCardNumber',
    generator: creditCardNumberGenerator,
  },
];

function getArrLen(matchedKey: string, targetListLen: number) {
  const hasArrayKey = matchedKey.match(/\[[1-9]+\]/);
  if (hasArrayKey) {
    const arrLen = Number(hasArrayKey[0].replace(/\[|\]/g, ''));
    if (arrLen <= 1) return 1;
    if (arrLen >= targetListLen) return targetListLen;
    return arrLen + 1;
  } else {
    return 1;
  }
}

function getOption(matchedKey: string) {
  const hasOptionKey = matchedKey.match(/\(.+\)/);
  if (hasOptionKey) {
    return hasOptionKey[0].replace(/\(|\)/g, '');
  }
}

export function dummyMatcher(origin: string) {
  origin = origin.replace(commentRegExp, '');
  for (let i = 0; i < matcherList.length; i++) {
    const item = matcherList[i];
    const regExp = new RegExp(`\\${item.key}(\\(.+\\))?(\\[[0-9]*\\])?`, 'gm');
    const matchedKey = origin.match(regExp);

    if (matchedKey) {
      if (item?.list) {
        const targetLen = item.list.length;
        const arrLen = getArrLen(matchedKey[0], targetLen);
        origin = origin.replaceAll(regExp, () => {
          let temp = [];
          for (let i = 0; i < arrLen; i++) {
            if (item.list) {
              const result = item.list[Math.floor(Math.random() * targetLen)];
              temp.push(isNaN(Number(result)) ? `'${result}'` : result);
            }
          }
          return `${arrLen === 1 ? temp[0] : '[' + temp + ']'}`;
        });
      }
      if (item?.generator) {
        origin = origin.replaceAll(regExp, () => {
          const arrLen = getArrLen(matchedKey[0], 100);
          const option = getOption(matchedKey[0]);
          let temp = [];
          for (let i = 0; i < arrLen; i++) {
            if (item.generator) {
              const result = item.generator(option);
              temp.push(isNaN(Number(result)) ? `'${result}'` : result);
            }
          }

          return `${arrLen === 1 ? temp[0] : '[' + temp + ']'}`;
        });
      }
    }
  }
  return origin;
}
