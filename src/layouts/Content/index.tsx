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
  address: $address,
  region: $region,
  occupation: $occupation,
  account : {
    bank: $bank,
    accountNumber: $accountNumber,
  },
  creditCard: {
    creditCardCompany: $creditCardCompany,
    creditCardNumber: $creditCardNumber
  }
  constellation: $constellation,
  habit: $habit,
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
