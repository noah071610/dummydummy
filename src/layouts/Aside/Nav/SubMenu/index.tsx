import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle from '@hooks/useToggle';
import { curPageState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { MenuIcon } from '../styles';
import { SubMenuList, SubMenuWrapper } from './styles';

interface IProps {
  menu: Menu;
}

interface Menu {
  label: string;
  value: string;
  subMenu?: any[];
  icon: IconDefinition;
}

function SubMenu({ menu }: IProps) {
  const [isOpenedSubMenuList, onChangeSubMenuList] = useToggle(false);
  const setCurPageState = useSetRecoilState(curPageState);
  const onClickSubMenu = useCallback((link: string) => {
    setCurPageState(link);
    window.location.hash = `${link}`;
  }, []);

  return (
    <SubMenuWrapper>
      <li
        className={
          isOpenedSubMenuList ? 'main_menu open-main_menu' : 'main_menu'
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
            <button onClick={() => onClickSubMenu(k.link)}>
              <FontAwesomeIcon
                className={k.link.includes('/trigger') ? 'trigger-svg' : ''}
                icon={k.icon}
                style={iconStyle('16px')}
              />
              <span>{k.value}</span>
            </button>
          </li>
        ))}
      </SubMenuList>
    </SubMenuWrapper>
  );
}

export default SubMenu;
