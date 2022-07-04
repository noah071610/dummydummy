import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback, useState } from 'react';
import tw, { styled } from 'twin.macro';
import ContentMenu from './ContentMenu';
import { ContentWrapper } from './styles';
interface IProps {}

const CodeWrapper = styled.div`
  ${tw`h-[90vh] overflow-hidden p-15px rounded-15px`}
  .cm-theme {
    ${tw`w-full h-full`}
  }
  .cm-line {
    ${tw`text-[#a9b7c6] text-18px py-3px`}
  }
  .cm-focused {
    ${tw`outline-none!`}
    outline-offset: 0;
  }
  .cm-editor {
    ${tw`py-15px px-30px rounded-20px!`}
  }
  .cm-gutters {
    display: none;
  }
`;

const goLang = `const myObj = {
  name : {
    firstName: $firstName,
    lastName: $lastName
  },
  gender: $gender,
  address: $address,
  phoneNumber: $phoneNumber,
  occupation: $occupation,
  account : {
    bank: $bank,
    accountNumber: $accountNumber,
  },
  creditCard: {
    creditCardCompany: $creditCardCompany,
    creditCardNumber: $creditCardNumber,
  },
  smoking: $smoking,
  drinking: $drinking,
  socialMedia: $socialMedia,
  mbti: $mbti,
  culture: {
    drama: $drama,
    movie: $movie,
    music: $music,
    artist: $artist,
    food: $food,
  },
  ,생일,신장,*날짜,시간,(회사명),랜덤링크,취미,아이피주소,닉네임,이메일
  ,학력,대학교명(서울에있는대학교),금액>랜덤숫자>나이 (알고리즘 구성 필요 , 범위구성 설정을 딥하게),
  색깔(헥스값 아니면 한국어),번호 설정할때 통신사, 지하철역(호선) , 아이디(mysql id) 
  ,uuid ,우편번호
};
`;

function Content({}: IProps) {
  const [contentCode, setContentCode] = useState(goLang);
  const onChange = useCallback((value: any) => {
    setContentCode(value);
  }, []);
  return (
    <ContentWrapper>
      <CodeWrapper>
        <CodeMirror
          value={goLang}
          height="100%"
          onChange={onChange}
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
        />
      </CodeWrapper>
      <ContentMenu contentCode={contentCode} />
    </ContentWrapper>
  );
}

export default Content;
