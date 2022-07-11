import { triggerList } from '@resource/triggers';
import TriggerList from './List';
import { TriggerSectionWrapper } from './styles';

function TriggerSection() {
  return (
    <TriggerSectionWrapper>
      <h1>공통 트리거 🔆</h1>
      <TriggerList
        name={'keyword[NUM]'}
        desc={'결괏값을 배열 형태로 (중복 포함) 묶어서'}
        randomExampleType={'arr'}
      />
      <TriggerList
        name={'keyword(str)'}
        desc={'결괏값을 문자열으로 변환해서'}
        randomExampleType={'str'}
      />
      <h1>트리거 목록 🔑</h1>
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
