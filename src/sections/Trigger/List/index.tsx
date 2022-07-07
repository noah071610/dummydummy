import { curPageState } from '@states';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import OptionTriggerList from './OptionTriggerList';
import {
  CodeBlock,
  Left,
  OptionalTriggerWrapper,
  Right,
  TitleWrapper,
  TriggerBox,
  TriggerListWrapper,
} from './styles';

interface TriggerOptions {
  value: string;
  desc: string;
}

interface IProps {
  name: string;
  desc: string;
  options?: TriggerOptions[];
}

function TriggerList({ name, desc, options }: IProps) {
  const curPage = useRecoilValue(curPageState);
  const [mainTriggerExample, setMainTriggerExample] = useState(
    dummyMatcher(`$${name}`)
  );
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testRef?.current && curPage === `#trigger-${name}`) {
      (testRef as any).current!.scrollIntoView();
    }
  }, [curPage]);

  const onClickMainTriggerCodeBlock = useCallback(() => {
    setMainTriggerExample(dummyMatcher(`$${name}`));
  }, [name]);

  return (
    <TriggerListWrapper ref={testRef} id={`#trigger-${name}`}>
      <TriggerBox>
        <Left>
          <TitleWrapper>
            <h2>${name}</h2>
          </TitleWrapper>
          <p>{desc} 반환합니다.</p>
        </Left>
        <Right>
          <CodeBlock onClick={onClickMainTriggerCodeBlock}>
            <span className="trigger-text">${name}</span>
            <span className="arrow">👇</span>
            <span className="result-text">{mainTriggerExample}</span>
          </CodeBlock>
        </Right>
      </TriggerBox>
      {options && (
        <OptionalTriggerWrapper>
          {options.map((v, i) => (
            <OptionTriggerList
              name={name}
              option={v}
              key={`optional-trigger-${i}`}
            />
          ))}
        </OptionalTriggerWrapper>
      )}
    </TriggerListWrapper>
  );
}

export default TriggerList;
