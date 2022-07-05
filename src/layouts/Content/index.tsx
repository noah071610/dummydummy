import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState } from 'react';
import ContentMenu from './ContentMenu';
import { CodeWrapper, ContentWrapper } from './styles';
interface IProps {}

const example = `const myObj = {
  name : {
    firstName: $firstName,
    lastName: $lastName,
    fullName: $fullName,
    nameWithGender: $nameWithGender
  },
  profile: {
    age: $age,
    birthday: $date,
    height: $height,
    gender: $gender,
    mbti: $mbti,
    homePage: $link,
    preference: {
      habit: $habit,
      smoking: $smoking,
      drinking: $drinking
    },
  },
  contact: {
    email: $email,
    mobileCarrier: $mobileCarrier,
    phoneNumber: $phoneNumber,
    socialMedia: $socialMedia,
  },
  address: {
    address:$address,
    postalCode: $postalCode,
  },
  career: {
    education: $education,
    university: $university,
    company: $company,
    occupation: $occupation
  },
  payment : {
    price: $price,
    bank: $bank,
    accountNumber: $accountNumber,
    creditCardCompany: $creditCardCompany,
    creditCardNumber: $creditCardNumber,
  },
  options: {
    ip: $ip,
    uuid: $uuid,
    station: $station,
    color: $color,
    number: $number,
  },
  culture: {
    drama: $drama,
    movie: $movie,
    music: $music,
    artist: $artist,
    food: $food,
  },
};
`;

function Content({}: IProps) {
  const [contentCode, setContentCode] = useState(example);
  const onChange = useCallback((value: any) => {
    setContentCode(value);
  }, []);
  return (
    <ContentWrapper>
      <CodeWrapper>
        <CodeMirror
          value={example}
          height="700px"
          onChange={onChange}
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
        />
        <ContentMenu contentCode={contentCode} />
      </CodeWrapper>
    </ContentWrapper>
  );
}

export default Content;
