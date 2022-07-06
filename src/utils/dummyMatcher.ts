import { accountNumberGenerator } from '@generator/accountNumberGenerator';
import { addressGenerator } from '@generator/addressGenerator';
import { colorGenerator } from '@generator/colorGenerator';
import { creditCardNumberGenerator } from '@generator/creditCardNumberGenerator';
import { dateGenerator } from '@generator/dateGenerator';
import { emailGenerator } from '@generator/emailGenerator';
import { ipGenerator } from '@generator/ipGenerator';
import { linkGenerator } from '@generator/linkGenerator';
import { nameGenerator } from '@generator/nameGenerator';
import { numberRangeGenerator } from '@generator/numberRangeGenerator';
import { phoneNumberGenerator } from '@generator/phoneNumberGenerator';
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
  generator?: () => string;
}[] = [
  { key: '$firstName', generator: () => nameGenerator('first') },
  { key: '$lastName', generator: () => nameGenerator('last') },
  { key: '$fullName', generator: () => nameGenerator('full') },
  { key: '$product', list: products },
  { key: '$nameWithGender', generator: () => nameGenerator('withGender') },
  { key: '$address', generator: addressGenerator },
  { key: '$link', generator: linkGenerator },
  { key: '$city', list: cities },
  { key: '$bank', list: banks },
  { key: '$phoneNumber', generator: phoneNumberGenerator },
  { key: '$uuid', generator: uuidGenerator },
  { key: '$ip', generator: ipGenerator },
  { key: '$drama', list: dramas },
  { key: '$movie', list: movies },
  { key: '$music', list: musics },
  { key: '$company', list: companies },
  {
    key: '$height',
    generator: () => numberRangeGenerator('height', [150, 185]),
  },
  { key: '$age', generator: () => numberRangeGenerator('age', [15, 50]) },
  {
    key: '$number',
    generator: () => numberRangeGenerator('random', [0, 1000]),
  },
  { key: '$university', list: universities },
  { key: '$education', list: education },
  { key: '$station', list: stations },
  { key: '$email', generator: emailGenerator },
  {
    key: '$date',
    generator: () => dateGenerator('YYYYMMDD', []),
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
  { key: '$color', generator: () => colorGenerator('hex') },
  {
    key: '$price',
    generator: () =>
      priceRangeGenerator([0, 50000], {
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

export function dummyMatcher(origin: string) {
  origin = origin.replace(commentRegExp, '');
  for (let i = 0; i < matcherList.length; i++) {
    const item = matcherList[i];
    const regExp = new RegExp(`(\\${item.key})`, 'gm');
    if (origin.match(regExp)) {
      if (item?.list) {
        origin = origin.replaceAll(item.key, () => {
          if (item.list) {
            return item.list[Math.floor(Math.random() * item.list.length)];
          } else {
            return '';
          }
        });
      }
      if (item?.generator) {
        origin = origin.replaceAll(item.key, () => {
          if (item.generator) {
            return item.generator();
          } else {
            return '';
          }
        });
      }
    }
  }

  return origin;
}
