import PropTypes from 'prop-types';
import { useGameOver } from '../../hooks/useGameOver';
import styles from './Game.module.scss';

function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
    console.log(`Start gameOver is ${gameOver}`);
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
