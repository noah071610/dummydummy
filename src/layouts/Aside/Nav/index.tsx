import { MenuList, NavWrapper } from './styles';

interface IProps {}

const menuList = [
  {
    link: '',
    name: '템플릿',
  },
  {
    link: '',
    name: '데이터 추출',
  },
  {
    link: '',
    name: '데이터 옵션 설정',
  },
];

function Nav({}: IProps) {
  return (
    <NavWrapper>
      <MenuList>
        {menuList.map((v) => (
          <a href={v.link}>
            <li>
              <span>{v.name}</span>
            </li>
          </a>
        ))}
      </MenuList>
    </NavWrapper>
  );
}

export default Nav;
