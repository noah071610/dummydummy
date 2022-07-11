import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle from '@hooks/useToggle';
import { curPageState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { NavMenu, NavMenuValue } from '@typings';
import { memo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { MenuIcon } from '../styles';
import { SubMenuList, SubMenuWrapper } from './styles';

interface IProps {
  menu: NavMenu;
  className: string;
  type: NavMenuValue;
}

function SubMenu({ className, menu, type }: IProps) {
  const [isOpenedSubMenuList, onChangeSubMenuList] = useToggle(false);
  const [curPage, setCurPageState] = useRecoilState(curPageState);
  const onClickSubMenu = useCallback(
    (link: string) => {
      setCurPageState(`#${type}-${link}`);
      window.location.hash = `#${type}-${link}`;
    },
    [type]
  );

  return (
    <SubMenuWrapper>
      <li
        className={
          isOpenedSubMenuList ? className + ' open-main_menu' : className
        }
        onClick={onChangeSubMenuList}
      >
        <button>
          <span>{menu.label}</span>
          <MenuIcon>
            <FontAwesomeIcon icon={menu.icon} style={iconStyle('16px')} />
          </MenuIcon>
        </button>
      </li>
      <SubMenuList className={isOpenedSubMenuList ? 'open-sub_menu' : ''}>
        {menu.subMenu?.map((k, j) => (
          <li key={`subMenu-${j}`}>
            <button
              className={curPage.includes(k.value) ? 'is-active' : ''}
              onClick={() => onClickSubMenu(k.value)}
            >
              {k.materialIcon ? (
                k.materialIcon
              ) : (
                <FontAwesomeIcon
                  className={!k.label ? 'trigger-svg' : ''}
                  icon={k?.icon ? k.icon : faDollarSign}
                  style={iconStyle('16px')}
                />
              )}
              <span>{k.label ?? k.value}</span>
            </button>
          </li>
        ))}
      </SubMenuList>
    </SubMenuWrapper>
  );
}

export default memo(SubMenu);
