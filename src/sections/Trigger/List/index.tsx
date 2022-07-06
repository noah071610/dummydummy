import {
  CodeBlock,
  Left,
  Right,
  TitleWrapper,
  TriggerListWrapper,
} from './styles';

interface IProps {
  name: string;
  desc: string;
  example: string;
}

function TriggerList({ name, desc, example }: IProps) {
  return (
    <TriggerListWrapper id={`#trigger-${name}`}>
      <Left>
        <TitleWrapper>
          <h2>${name}</h2>
        </TitleWrapper>
        <p>{desc} 반환합니다.</p>
      </Left>
      <Right>
        <CodeBlock>
          <span className="trigger-text">${name}</span>
          <span className="arrow">👇</span>
          <span className="result-text">{example} ...</span>
        </CodeBlock>
      </Right>
    </TriggerListWrapper>
  );
}

export default TriggerList;
