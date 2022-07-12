import Nav from './Nav';
import Poster from './Poster';
import { AsideWrapper } from './styles';

function Aside({}) {
  return (
    <AsideWrapper>
      <Poster />
      <Nav />
    </AsideWrapper>
  );
}

export default Aside;
