import { headerMenuState } from '@states';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import HeaderMenu from './Menu';
import { HeaderInner, HeaderWrapper, Logo, LogoWrapper } from './styles';

function Header({}) {
  const [onHeaderMenu, setOnHeaderMenu] = useRecoilState(headerMenuState);
  const onChangeHeaderMenuToggle = useCallback(() => {
    setOnHeaderMenu((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <LogoWrapper onClick={onChangeHeaderMenuToggle}>
          <Logo />
        </LogoWrapper>
      </HeaderInner>
      <HeaderMenu onHeaderMenu={onHeaderMenu} />
    </HeaderWrapper>
  );
}

export default Header;
