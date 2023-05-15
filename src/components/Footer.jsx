import Logo from './Logo';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left"></div>
      <Logo sizeEm={1} />
    </div>
  );
}

export default Footer;
