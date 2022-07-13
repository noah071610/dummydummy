import { faJs } from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faCartShopping,
  faCreditCard,
  faFile,
  faGear,
  faPaste,
  faUser,
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

interface IProps {
  isInHeader?: boolean;
}

function Nav({ isInHeader }: IProps) {
  const [curPageData, setCurPageState] = useRecoilState(curPageState);
  const curPage = useMemo(
    () =>
      curPageData.includes('template-')
        ? 'template'
        : curPageData.includes('trigger')
        ? 'trigger'
        : curPageData.includes('profile') && isInHeader
        ? 'profile'
        : 'dash',
    [curPageData, isInHeader]
  );
  return (
    <NavWrapper>
      <MenuList>
        {isInHeader && (
          <SubMenu
            className={`main_menu ${curPage === 'profile' ? 'is-active' : ''}`}
            type={'profile'}
            menu={{
              label: '더미더미에 관하여',
              value: 'profile',
              icon: faUser,
            }}
            isInHeader={isInHeader}
          />
        )}
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
                isInHeader={isInHeader}
              />
            );
          }
        })}
      </MenuList>
    </NavWrapper>
  );
}

export default Nav;
