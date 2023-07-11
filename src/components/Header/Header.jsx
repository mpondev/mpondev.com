import Logo from '../Logo/Logo';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <Logo sizeEm={1.8} />
      <div className="header-right"></div>
    </div>
  );
}

export default Header;
