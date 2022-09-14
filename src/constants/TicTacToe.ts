export enum PlayerTypes {
  USER = "X",
  COMPUTER = "O",
}
export const PLAYER_COMPUTER_MOVE_DELAY_MS = 300;

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default {
  PlayerTypes,
  WINNING_COMBINATIONS,
};
