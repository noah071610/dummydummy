import { faJs } from '@fortawesome/free-brands-svg-icons';
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
import DataObjectIcon from '@mui/icons-material/DataObject';
import { triggerList } from '@resource/triggers';
import { curPageState } from '@states';
import { NavMenu } from '@typings';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { MenuList, NavWrapper } from './styles';
import SubMenu from './SubMenu';

const menuList: NavMenu[] = [
  {
    label: '대시보드',
    value: 'dash',
    icon: faFile,
    subMenu: [
      {
        label: 'JSON',
        value: 'json',
        materialIcon: <DataObjectIcon className="material-icon" />,
      },
      {
        label: 'Javascript',
        value: 'javascript',
        icon: faJs,
      },
    ],
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
    label: '트리거 목록',
    value: 'trigger',
    subMenu: [
      { value: 'keyword[NUM]' },
      { value: 'keyword(str)' },
      ...triggerList,
    ],
    icon: faGear,
  },
];
//

function Nav() {
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
  return (
    <NavWrapper>
      <MenuList>
        {menuList.map((v, i) => {
          if (false) {
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
