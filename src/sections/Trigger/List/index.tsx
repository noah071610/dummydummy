import { triggerList } from '@resource/triggers';
import { curPageState } from '@states';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
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
  randomExampleType?: 'arr' | 'str';
}

function getTriggerKeyWithArr(type: 'arr' | 'str') {
  const randomKey =
    '$' + triggerList[Math.floor(Math.random() * triggerList.length)].value;
  return type === 'arr'
    ? randomKey + `[${Math.floor(Math.random() * (4 - 2) + 2)}]`
    : randomKey + `(str)`;
}

function TriggerList({ name, desc, options, randomExampleType }: IProps) {
  const curPage = useRecoilValue(curPageState);
  const [mainTriggerExample, setMainTriggerExample] = useState(
    dummyMatcher(`$${name}`)
  );
  const [randomExample, setRandomExample] = useState<null | string>(null);
  const [randomExampleKeyword, setRandomExampleKeyword] = useState<
    null | string
  >(null);
  const testRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testRef?.current && curPage === `#trigger-${name}`) {
      (testRef as any).current!.scrollIntoView();
    }
  }, [curPage]);

  useEffect(() => {
    if (randomExampleType) {
      const triggerKey = getTriggerKeyWithArr(randomExampleType);
      setRandomExampleKeyword(triggerKey);
      setRandomExample(dummyMatcher(triggerKey));
    }
  }, [randomExampleType]);

  const onClickMainTriggerCodeBlock = useCallback(() => {
    if (randomExampleType) {
      const triggerKey = getTriggerKeyWithArr(randomExampleType);
      setRandomExampleKeyword(triggerKey);
      setRandomExample(dummyMatcher(triggerKey));
    } else {
      setMainTriggerExample(dummyMatcher(`$${name}`));
    }
  }, [randomExampleType, name]);

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
            <span className="trigger-text">
              {randomExampleKeyword ?? `$${name}`}
            </span>
            <span className="arrow">👇</span>
            <span className="result-text">
              {randomExample ?? mainTriggerExample}
            </span>
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

export default memo(TriggerList);
