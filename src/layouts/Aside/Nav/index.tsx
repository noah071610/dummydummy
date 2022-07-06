import {
  faAddressCard,
  faCartShopping,
  faCreditCard,
  faFile,
  faGear,
  faPaste,
  faUser,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { triggerList } from '@resource/triggers';
import { curPageState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { MenuIcon, MenuList, NavWrapper } from './styles';
import SubMenu from './SubMenu';

interface IProps {}

const menuList = [
  {
    isDashboard: true,
    label: '대시보드',
    value: 'dash',
    icon: faFile,
  },
  {
    label: '템플릿',
    value: 'template',
    subMenu: [
      {
        value: '유저정보',
        link: '#template-user',
        icon: faAddressCard,
      },
      {
        value: '쇼핑몰',
        link: '#template-shop',
        icon: faCartShopping,
      },
      {
        value: '자기소개',
        link: '#template-introduce',
        icon: faUser,
      },
      {
        value: '이력서',
        link: '#template-resume',
        icon: faUserPen,
      },
      {
        value: '결제페이지',
        link: '#template-pricing',
        icon: faCreditCard,
      },
    ],
    icon: faPaste,
  },
  {
    label: '트리거 설정',
    value: 'trigger',
    subMenu: triggerList,
    icon: faGear,
  },
];

function Nav({}: IProps) {
  const [curPageData, setCurPageState] = useRecoilState(curPageState);
  const curPage = useMemo(
    () =>
      curPageData.includes('template-')
        ? 'template'
        : curPageData.includes('trigger-')
        ? 'trigger'
        : 'dash',
    [curPageData]
  );
  console.log(curPage);

  const onClickDashboardMenu = useCallback(() => {
    setCurPageState('/');
    window.location.hash = `dashboard`;
  }, []);
  return (
    <NavWrapper>
      <MenuList>
        {menuList.map((v, i) => {
          if (v.isDashboard) {
            return (
              <li
                className={`main_menu ${
                  curPage === v.value ? 'is-active' : ''
                }`}
                key={`menu-${i}`}
              >
                <button onClick={onClickDashboardMenu}>
                  <span>{v.label}</span>
                  <MenuIcon>
                    <FontAwesomeIcon icon={v.icon} style={iconStyle('16px')} />
                  </MenuIcon>
                </button>
              </li>
            );
          } else {
            return <SubMenu menu={v} key={`menu-${i}`} />;
          }
        })}
      </MenuList>
    </NavWrapper>
  );
}

export default Nav;
