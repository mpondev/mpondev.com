import './Logo.scss';

function Logo({ sizeEm }) {
  // const { logosize } = props;
  return (
    <div className="logo" style={{ fontSize: `${sizeEm}em` }}>
      <span className="mpn">mp</span>
      <span className="o">o</span>
      <span className="mpn">n</span>
      <span className="dev">dev</span>
    </div>
  );
}

export default Logo;
