import PropTypes from 'prop-types';
import { useBoard } from '../../hooks/useBoard';
import Board from '../Board/Board';

function Game({ rows, columns, setGameOver }) {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div>
      <Board board={board} />
    </div>
  );
}

Game.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  setGameOver: PropTypes.func,
};

export default Game;
