import { triggerList } from '@resource/triggers';
import TriggerList from './List';
import { TriggerSectionWrapper } from './styles';

interface IProps {}

function TriggerSection({}: IProps) {
  return (
    <TriggerSectionWrapper>
      <h1>트리거 목록</h1>
      {triggerList.map((v, i) => (
        <TriggerList
          key={`trigger-list-${i}`}
          name={v.value}
          desc={v.desc}
          options={v.options}
        />
      ))}
    </TriggerSectionWrapper>
  );
}

export default TriggerSection;
