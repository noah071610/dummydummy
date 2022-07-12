import { TriggerOptionList } from '@typings';
import { memo, useCallback, useState } from 'react';
import { dummyMatcher } from 'src/utils/dummyMatcher';
import { CodeBlock, Left, Right, TitleWrapper, TriggerBox } from '../styles';

interface IProps {
  name: string;
  option: TriggerOptionList;
}

function OptionTriggerList({ name, option }: IProps) {
  const [optionalTriggerExample, setOptionalTriggerExample] = useState<
    string | null
  >(null);

  const onClickOptionalTriggerCodeBlock = useCallback((triggerName: string) => {
    setOptionalTriggerExample(dummyMatcher(triggerName));
  }, []);

  return (
    <TriggerBox>
      <Left>
        <TitleWrapper>
          <h2>
            ${name}
            {option.value.includes('{min,max}')
              ? option.value
              : `(${option.value})`}
          </h2>
        </TitleWrapper>
        <p>{option.desc}</p>
      </Left>
      <Right>
        <CodeBlock
          onClick={() =>
            onClickOptionalTriggerCodeBlock(
              `\$${name}${
                option.value.includes('{min,max}')
                  ? name === 'number'
                    ? `{100,999}`
                    : `{39800,98000}`
                  : `(${option.value})`
              }`
            )
          }
        >
          <span className="trigger-text">
            ${name}
            {option.value.includes('{min,max}')
              ? name === 'number'
                ? `{100,999}`
                : `{39800,98000}`
              : `(${option.value})`}
          </span>
          <span className="arrow">👇</span>
          <span className="result-text">
            {optionalTriggerExample ??
              dummyMatcher(
                `\$${name}${
                  option.value.includes('{min,max}')
                    ? name === 'number'
                      ? `{100,999}`
                      : `{39800,98000}`
                    : `(${option.value})`
                }`
              )}
          </span>
        </CodeBlock>
      </Right>
    </TriggerBox>
  );
}

export default memo(OptionTriggerList);
