export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
    color: '55, 169, 169',
  },
  J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '40, 29, 177' },
  L: {
    shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
    color: '255, 161, 16',
  },
  O: { shape: [['O', 'O'], ['O', 'O']], color: '209, 207, 41' },
  S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '13, 210, 47' },
  T: {
    shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]],
    color: '132, 27, 136',
  },
  Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '150, 2, 31' },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
