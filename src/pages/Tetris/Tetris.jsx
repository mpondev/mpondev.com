import Game from './components/Game/Game';
import { useGameOver } from './hooks/useGameOver';

import styles from './Tetris.module.scss';

function Tetris() {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
    console.log(`Start gameOver is ${gameOver}`);
  }

  return (
    <div className={styles.tetris}>
      <button className={styles.startBtn} onClick={start}>
        Start
      </button>

      <Game rows={20} columns={10} setGameOver={setGameOver} />
    </div>
  );
}

export default Tetris;
