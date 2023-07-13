import styles from './Tetris.module.scss';
import Game from './components/Game/Game';

function Tetris() {
  return (
    <div className={styles.tetris}>
      <Game rows={20} columns={10} />
    </div>
  );
}

export default Tetris;
