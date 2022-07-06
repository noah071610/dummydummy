import { exampleCode } from '@resource/templates';
import { atom } from 'recoil';

export const curPageState = atom({
  key: 'curPageState',
  default: window.location.hash,
});

export const dashboardState = atom<{
  code: string;
  onResultModal: boolean;
}>({
  key: 'dashboardState',
  default: {
    code: exampleCode,
    onResultModal: false,
  },
});

export const templateState = atom<{
  templates: { [key: string]: string };
}>({
  key: 'templateState',
  default: {
    templates: {
      user: `const user = {
        name : {
            firstName: $firstName,
            lastName: $lastName,
        },
        email: $email,
        gender: $gender,
        age: $age,
        birthday: $date,
      };`,
      shop: `const product = {
        name: $product,
        seller: $fullName,
        brand: $company,
        date: $date,
        review: $number,
        size: [$number,$number,$number],
        color: $color
    };`,
      introduce: `const product = {
        name: $product,
        seller: $fullName,
        brand: $company,
        date: $date,
        review: $number,
        size: $number x $number x $number,
        color: $color
    };`,
      resume: `const product = {
        name: $product,
        seller: $fullName,
        brand: $company,
        date: $date,
        review: $number,
        size: $number x $number x $number,
        color: $color
    };`,
      pricing: ``,
    },
  },
});
