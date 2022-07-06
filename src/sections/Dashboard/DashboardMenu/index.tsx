import {
  faArrowRotateLeft,
  faGear,
  faList,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  styled as muiStyled,
  Tooltip as MuiTooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { dashboardState } from '@states';
import { iconStyle } from '@styles/customStyle';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { DashboardMenuContainer, MenuIconButton } from './styles';
interface IProps {}

const menuList = [
  { label: '초기화', value: 'reset', icon: faArrowRotateLeft },
  { label: '트리거', value: 'trigger', icon: faList },
  { label: '설정', value: 'setting', icon: faGear },
  { label: '결과보기', value: 'result', icon: faPenToSquare },
];

function DashboardMenu({}: IProps) {
  const setDashboardState = useSetRecoilState(dashboardState);

  const BootstrapTooltip = muiStyled(
    ({ className, ...props }: TooltipProps) => (
      <MuiTooltip {...props} classes={{ popper: className }} />
    )
  )(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: 'rgba(255,255,255,0.8)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: '10px 16px',
      color: 'black',
    },
  }));

  const onClickMenuBtn = useCallback((value: string) => {
    switch (value) {
      case 'result':
        setDashboardState((prev) => ({ ...prev, onResultModal: true }));
        break;
      case 'reset':
        break;
      case 'trigger':
        break;
      case 'setting':
        break;
    }
  }, []);

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
          >
            <FontAwesomeIcon style={iconStyle('18px')} icon={menu.icon} />
          </MenuIconButton>
        </BootstrapTooltip>
      ))}
    </DashboardMenuContainer>
  );
}

export default DashboardMenu;
