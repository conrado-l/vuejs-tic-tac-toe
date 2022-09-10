<template>
  <div class="container">
    <header>Tic Tac Toe</header>
    <div>Current player: {{ currentPlayer }}</div>
    <div class="tic-tac-toe-squares">
      <TicTacToeSquare
        v-for="(square, index) in ticTacToe"
        :va="square"
        :key="index"
        :index="index"
        @click="onSquareClicked(index)"
      ></TicTacToeSquare>
    </div>
  </div>
</template>

<script lang="ts">
import TicTacToeSquare from "@/components/TicTacToeSquare";

export default {
  name: "TicTacToe",

  components: { TicTacToeSquare },

  data() {
    return {
      ticTacToe: [
        "0", "0", "0",
        "0", "0", "0",
        "0", "0", "0"
      ],
      currentPlayer: "X",
      isGameFinished: false,
    };
  },

  methods: {
    onSquareClicked(index: number) {
      if (this.isGameFinished || !this.isSquareFree(index)) {
        return;
      }

      this.ticTacToe[index] = this.currentPlayer;
      this.checkWinner();

      if (!this.isGameFinished) {
        this.switchPlayer();
      }
    },

    isSquareFree(squareIndex: number): boolean {
      return this.ticTacToe[squareIndex] === "0";
    },

    switchPlayer() {
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    },

    checkWinner() {
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tic-tac-toe-squares {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
