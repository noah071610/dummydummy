import { FLEX, GRID } from '@styles/customStyle';
import tw, { styled } from 'twin.macro';
import Aside from './Aside';
import Content from './Content';

const Body = styled.div`
  ${tw`h-screen`}
  ${FLEX()}
`;
const Main = styled.main`
  ${tw`w-[1220px] h-[90vh] bg-bg rounded-20px overflow-hidden`}
  ${GRID('2fr 5fr')}
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
