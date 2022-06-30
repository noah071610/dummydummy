import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';
import CodeMirror from '@uiw/react-codemirror';
import { useCallback } from 'react';
import tw, { styled } from 'twin.macro';
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

const goLang = `const CracoAlias = require('craco-alias');
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    plugins: [
      '@emotion/babel-plugin',
      'babel-plugin-twin',
      'babel-plugin-macros',
    ],
  },
};
`;

function Content({}: IProps) {
  const onChange = useCallback((value: any) => {
    console.log('value:', value);
  }, []);
  return (
    <ContentWrapper>
      <CodeWrapper>
        <CodeMirror
          value={goLang}
          height="100%"
          onChange={onChange}
          theme={darcula}
          extensions={[javascript({ jsx: true })]}
        />
      </CodeWrapper>
    </ContentWrapper>
  );
}

export default Content;
