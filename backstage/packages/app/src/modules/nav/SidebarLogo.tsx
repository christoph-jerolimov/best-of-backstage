import { Link, useSidebarOpenState } from '@backstage/core-components';
import { LogoFull } from './LogoFull';
import { LogoIcon } from './LogoIcon';

export const SidebarLogo = () => {
  const { isOpen } = useSidebarOpenState();

  return (
    <div style={{ margin: '24px' }}>
      <Link
        to="/"
        underline="none"
        aria-label="Home"
        style={{ display: 'block', width: '100%' }}
      >
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};
