import { FLEX, GRID, MQ } from '@styles/customStyle';
import 'animate.css';
import tw, { styled } from 'twin.macro';
import Aside from './Aside';
import Content from './Content';

const Body = styled.div`
  ${tw`h-screen`}
  ${FLEX()}
`;
const Main = styled.main`
  ${tw`w-[1120px] h-[730px] bg-bg rounded-20px overflow-hidden`}
  ${GRID('2fr 5fr')}
  ${MQ('1120px')} {
    ${tw`w-full h-full`}
  }
`;

function App() {
  return (
    <Body>
      <Main>
        <Aside />
        <Content />
      </Main>
    </Body>
  );
}

export default App;
