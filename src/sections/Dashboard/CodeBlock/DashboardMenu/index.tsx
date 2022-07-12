import { BootstrapTooltip } from '@components/BootstrapTooltip';
import {
  faArrowRotateLeft,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { curPageState, dashboardState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DashboardMenuContainer, MenuIconButton } from './styles';

const menuList = [
  { label: '초기화', value: 'reset', icon: faArrowRotateLeft },
  // { label: '트리거 숏컷', value: 'trigger', icon: faList }, TODO:
  { label: '결과보기', value: 'result', icon: faPenToSquare },
];

function DashboardMenu() {
  const curPage = useRecoilValue(curPageState);
  const [{}, setDashboardState] = useRecoilState(dashboardState);
  const onClickMenuBtn = useCallback(
    (value: string) => {
      switch (value) {
        case 'result':
          setDashboardState((prev) => ({ ...prev, onResultModal: true }));
          break;
        case 'reset':
          curPage.includes('javascript')
            ? setDashboardState((prev) => ({ ...prev, javascriptCode: '' }))
            : setDashboardState((prev) => ({ ...prev, jsonCode: '' }));
          break;
        case 'trigger':
          break;
      }
    },
    [curPage]
  );

  return (
    <DashboardMenuContainer>
      {menuList.map((menu, i) => (
        <BootstrapTooltip
          key={`content-menu-${i}`}
          title={menu.label}
          placement="top"
          arrow
        >
          <MenuIconButton
            onClick={() => onClickMenuBtn(menu.value)}
            isResult={menu.value === 'result'}
            className={menu.value}
          >
            <FontAwesomeIcon style={iconStyle('18px')} icon={menu.icon} />
          </MenuIconButton>
        </BootstrapTooltip>
      ))}
    </DashboardMenuContainer>
  );
}

export default DashboardMenu;
