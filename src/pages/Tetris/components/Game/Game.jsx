import PropTypes from 'prop-types';
import styles from './Game.module.scss';

function Game({ rows, columns }) {
  function start() {
    console.log('start');
  }

  return (
    <div className="game">
      <button className={styles.startBtn} onClick={start}>
        Start
      </button>
    </div>
  );
}

Game.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
};

export default Game;
