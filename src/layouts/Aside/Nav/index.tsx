import {
  faDollarSign,
  faFile,
  faGear,
  faPaste,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { triggerList } from '@resource/triggers';
import { iconStyle } from '@styles/customStyle';
import { MenuIcon, MenuList, NavWrapper, SubMenuList } from './styles';

interface IProps {}

const menuList = [
  {
    link: '/',
    name: '대시보드',
    icon: faFile,
  },
  {
    link: '/',
    name: '템플릿',
    icon: faPaste,
  },
  {
    name: '트리거 설정',
    subMenu: triggerList,
    icon: faGear,
  },
];

function Nav({}: IProps) {
  return (
    <NavWrapper>
      <MenuList>
        {menuList.map((v, i) => {
          if (v.link) {
            return (
              <li className="main-menu" key={`menu-${i}`}>
                <a href={v.link}>
                  <span>{v.name}</span>
                  <MenuIcon>
                    <FontAwesomeIcon icon={v.icon} style={iconStyle('16px')} />
                  </MenuIcon>
                </a>
              </li>
            );
          } else {
            return (
              <>
                <li className="main-menu" key={`menu-${i}`}>
                  <button>
                    <span>{v.name}</span>
                    <MenuIcon>
                      <FontAwesomeIcon
                        icon={v.icon}
                        style={iconStyle('16px')}
                      />
                    </MenuIcon>
                  </button>
                </li>
                <SubMenuList>
                  {v.subMenu?.map((k, j) => (
                    <li key={`subMenu-${i}-${j}`}>
                      <a href="/">
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          style={iconStyle('16px')}
                        />
                        <span>{k.name}</span>
                      </a>
                    </li>
                  ))}
                </SubMenuList>
              </>
            );
          }
        })}
      </MenuList>
    </NavWrapper>
  );
}

export default Nav;
