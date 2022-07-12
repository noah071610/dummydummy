import Nav from '@layouts/Aside/Nav';
import { useCallback } from 'react';
import { HeaderMenuWrapper } from './styles';

function HeaderMenu({ onHeaderMenu }: { onHeaderMenu: boolean }) {
  const onClickLogo = useCallback(() => {}, []);

  return (
    <HeaderMenuWrapper onHeaderMenu={onHeaderMenu}>
      <Nav isInHeader={true} />
    </HeaderMenuWrapper>
  );
}

export default HeaderMenu;
