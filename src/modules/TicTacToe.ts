// Constants
import {
  PlayerTypes,
  PLAYER_COMPUTER_MOVE_DELAY_MS,
  WINNING_COMBINATIONS,
} from "@/constants/TicTacToe";

// Utils
import { getRandomIntInclusive } from "@/utils/Numbers";

// Types
import type { Square } from "@/types/Square";
import type { Board } from "@/types/Board";

export class TicTacToe {
  _board: Board = [];
  _currentPlayer: PlayerTypes | null = null;
  _isGameFinished: boolean = false;
  _winnerMessage: string = "";

  constructor() {}

  initializeGame() {
    this._board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.setInitialRandomPlayer();
    this._isGameFinished = false;
    this._winnerMessage = "";
  }

  setInitialRandomPlayer() {
    this._currentPlayer =
      getRandomIntInclusive(0, 1) === 0
        ? PlayerTypes.USER
        : PlayerTypes.COMPUTER;

    if (this._currentPlayer === PlayerTypes.COMPUTER) {
      this.makeComputerMove();
    }
  }

  isSquareFree(row: number, column: number): boolean {
    return this._board[row][column] === null;
  }

  switchPlayer() {
    this._currentPlayer =
      this._currentPlayer === PlayerTypes.USER
        ? PlayerTypes.COMPUTER
        : PlayerTypes.USER;

    if (this._currentPlayer === PlayerTypes.COMPUTER) {
      this.makeComputerMove();
    }
  }

  getWinner(): string | null {
    const flattenBoard = this._board.flat() as Array<string>;

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (
        flattenBoard[a] &&
        flattenBoard[a] === flattenBoard[b] &&
        flattenBoard[a] === flattenBoard[c]
      ) {
        return flattenBoard[a];
      }
    }
    return null;
  }

  announceWinner(winner: string) {
    this._winnerMessage = `The winner is: ${winner}`;
  }

  runWinnerChecks() {
    const winner = this.getWinner();

    if (winner) {
      this._isGameFinished = true;
      this.announceWinner(winner);
    }
  }

  makeMove(player: string, row: number, column: number) {
    if (
      this._isGameFinished ||
      row > 2 ||
      column > 2 ||
      !this.isSquareFree(row, column) ||
      !this.canPlayerMakeMove(player)
    ) {
      return;
    }

    this._board[row][column] = player;

    this.runWinnerChecks();
    // TODO: run a function that checks if the game is over and nobody can win

    if (!this._isGameFinished) {
      this.switchPlayer();
    }
  }

  makeComputerMove() {
    setTimeout(() => {
      const res: Square | null = this.getRandomFreeSquareIndex();

      if (!res) {
        return;
      }

      const { row, column }: Square = this.getRandomFreeSquareIndex();

      this.makeMove(PlayerTypes.COMPUTER, row, column);
    }, PLAYER_COMPUTER_MOVE_DELAY_MS);
  }

  getRandomFreeSquareIndex(): Square | null {
    const freeSquaresIndexes: Array<Square> = [];

    this._board.forEach((row, rowIndex) => {
      row.forEach((square, columnIndex) => {
        if (square === null) {
          freeSquaresIndexes.push({ row: rowIndex, column: columnIndex });
        }
      });
    });

    if (!freeSquaresIndexes.length) {
      return null;
    }

    const randomFreeSquareIndex = getRandomIntInclusive(
      0,
      freeSquaresIndexes.length - 1
    );

    return freeSquaresIndexes[randomFreeSquareIndex];
  }

  canPlayerMakeMove(player: string) {
    return this._currentPlayer === player;
  }
}
