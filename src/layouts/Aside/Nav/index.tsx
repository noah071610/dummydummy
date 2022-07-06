import {
  faAddressCard,
  faCartShopping,
  faCreditCard,
  faFile,
  faGear,
  faPaste,
  faUser,
  faUserPen,
  IconDefinition,
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

interface SubMenuType {
  label?: string;
  value: string;
  icon?: IconDefinition;
}

export interface MenuType {
  label: string;
  value: 'dash' | 'trigger' | 'template';
  icon: IconDefinition;
  subMenu?: SubMenuType[];
}

const menuList: MenuType[] = [
  {
    label: '대시보드',
    value: 'dash',
    icon: faFile,
  },
  {
    label: '템플릿',
    value: 'template',
    subMenu: [
      {
        label: '유저정보',
        value: 'user',
        icon: faAddressCard,
      },
      {
        label: '쇼핑몰',
        value: 'shop',
        icon: faCartShopping,
      },
      {
        label: '자기소개',
        value: 'introduce',
        icon: faUser,
      },
      {
        label: '이력서',
        value: 'resume',
        icon: faUserPen,
      },
      {
        label: '결제정보',
        value: 'pricing',
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

  const onClickDashboardMenu = useCallback(() => {
    setCurPageState('/');
    window.location.hash = `dashboard`;
  }, []);
  return (
    <NavWrapper>
      <MenuList>
        {menuList.map((v, i) => {
          if (v.value === 'dash') {
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
            return (
              <SubMenu
                className={`main_menu ${
                  curPage === v.value ? 'is-active' : ''
                }`}
                type={v.value}
                menu={v}
                key={`menu-${i}`}
              />
            );
          }
        })}
      </MenuList>
    </NavWrapper>
  );
}

export default Nav;
