import PropTypes from 'prop-types';
import './Logo.scss';

function Logo({ sizeEm }) {
  return (
    <div className="logo" style={{ fontSize: `${sizeEm}em` }}>
      <span className="mpn">mp</span>
      <span className="o">o</span>
      <span className="mpn">n</span>
      <span className="dev">dev</span>
    </div>
  );
}

Logo.propTypes = {
  sizeEm: PropTypes.number,
};

export default Logo;
