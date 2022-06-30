import Nav from './Nav';
import Poster from './Poster';
import { AsideWrapper } from './styles';

interface IProps {}

function Aside({}: IProps) {
  return (
    <AsideWrapper>
      <Poster />
      <Nav />
    </AsideWrapper>
  );
}

export default Aside;
