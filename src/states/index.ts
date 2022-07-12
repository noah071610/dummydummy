import { exampleJavascriptCode, exampleJsonCode } from '@resource/templates';
import { atom } from 'recoil';

export const curPageState = atom({
  key: 'curPageState',
  default: window.location.hash,
});

export const headerMenuState = atom({
  key: 'headerMenuState',
  default: false,
});

export const snackbarState = atom<{
  isOpen: boolean;
  message: string;
}>({
  key: 'snackbarState',
  default: {
    isOpen: false,
    message: '',
  },
});

export const dashboardState = atom<{
  jsonCode: string;
  javascriptCode: string;
  onResultModal: boolean;
}>({
  key: 'dashboardState',
  default: {
    jsonCode: exampleJsonCode,
    javascriptCode: exampleJavascriptCode,
    onResultModal: false,
  },
});

export const templateState = atom<{
  templates: { [key: string]: string };
}>({
  key: 'templateState',
  default: {
    templates: {
      'user-json': `{
  "name": {
    "firstName": "$firstName",
    "lastName": "$lastName",
  },
  "email": "$email",
  "gender": "$gender",
  "age": "$age",
  "birthday": "$date",
}`,
      'user-javascript': `const user = {
  name: {
    firstName: $firstName(str),
    lastName: $lastName(str),
  },
  email: $email(str),
  gender: $gender(str),
  age: $age(str),
  birthday: "$date(yy)",
};`,
      'shop-json': `{
  "name": "$product",
  "seller": "$fullName(gender)",
  "brand": "$company",
  "date": "$date(YYYY)",
  "review": "$number{1000,9000}",
  "size": $number{100,255}(str)[3],
  "color": "$color(hex)"
}`,
      'shop-javascript': `const product = {
  name: $product(str),
  seller: "$fullName(gender)",
  brand: "$company",
  date: $date(yyyy),
  review: $number{1000,9000},
  size: $number{100,255}[3],
  color: "$color(hex)"
};`,
      'introduce-json': `{
  "introduce" : "안녕하세요. 저는 $fullName 이라고 하며 $age $gender입니다.\\n저의 직업은 $occupation 이며 현재 학력은 $education 입니다.\\n제 주소는 $address ($postalCode)인데\\n제 자가이며 집 가격은 $number{10,30}억 입니다.\\n취미는 $habit 이며 $mbti 이에요. 공통된 관심사가 있으면 좋겠네요.\\n\\n잘 부탁드립니다."
}`,
      'introduce-javascript': `const introduce = 
\`
  안녕하세요. 저는 $fullName 이라고 하며 $age $gender입니다.
  저의 직업은 $occupation 이며 현재 학력은 $education 입니다.
  제 주소는 $address ($postalCode)인데 
  제 자가이며 집 가격은 $number{10,30}억 입니다.
  취미는 $habit 이며 $mbti 이에요. 공통된 관심사가 있으면 좋겠네요.

  잘 부탁드립니다.
\`;`,
      'resume-json': `const product = {
  name: $product,
  seller: $fullName,
  brand: $company,
  date: $date,
  review: $number,
  size: $number x $number x $number,
  color: $color
};`,
      'resume-javascript': `const product = {
  name: $product,
  seller: $fullName,
  brand: $company,
  date: $date,
  review: $number,
  size: $number x $number x $number,
  color: $color
};`,
      'pricing-json': ``,
      'pricing-javascript': ``,
    },
  },
});
