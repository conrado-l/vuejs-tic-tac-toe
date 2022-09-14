<template>
  <div class="container">
    <div class="tic-tac-toe">
      <h1>Tic Tac Toe</h1>

      <!-- Messages -->
      <p :class="[winnerMessageClass, 'font-big', 'bold']" v-if="winnerMessage">
        {{ winnerMessage }}
      </p>
      <p v-else>Current player: {{ currentPlayer }}</p>
      <!---->

      <!-- Game board -->
      <div v-if="ticTacToe" class="tic-tac-toe-squares">
        <div class="squares-row" v-for="(row, i) in board" :key="i">
          <TicTacToeSquare
            v-for="(column, n) in row"
            :key="n"
            :player="board[i][n]"
            @click="onSquareClick(i, n)"
          ></TicTacToeSquare>
        </div>
        <!---->
      </div>
    </div>

    Restart game button
    <button @click="ticTacToe.initializeGame">Restart game</button>

    <!-- Game instructions/info -->
    <!--    <TicTacToeInstructions></TicTacToeInstructions>-->
    <!---->
  </div>
</template>

<script lang="ts">
// Libs
import { defineComponent } from "vue";

// Components
import TicTacToeSquare from "@/components/TicTacToeSquare/TicTacToeSquare.vue";
import TicTacToeInstructions from "@/components/TicTacToeInstructions/TicTacToeInstructions.vue";

// Modules
import { TicTacToe } from "@/modules/TicTacToe";

// Constants
import { PlayerTypes } from "@/constants/TicTacToe";

// Styles
import "@/assets/helpers.css";
import "@/assets/colors.css";
import "@/assets/buttons.css";
import "@/assets/fonts.css";

export default defineComponent({
  name: "TicTacToe",

  components: { TicTacToeInstructions, TicTacToeSquare },

  data() {
    return {
      ticTacToe: new TicTacToe(),
    };
  },

  mounted() {
    this.ticTacToe.initializeGame();
  },

  computed: {
    board(): Array<Array<string | null>> {
      return this.ticTacToe._board;
    },

    currentPlayer(): PlayerTypes | null {
      return this.ticTacToe._currentPlayer;
    },

    winnerMessage(): string {
      return this.ticTacToe._winnerMessage;
    },

    winnerMessageClass(): string {
      return this.currentPlayer === PlayerTypes.USER
        ? "color-red"
        : "color-green";
    },
  },

  methods: {
    onSquareClick(row: number, column: number) {
      this.ticTacToe.makeMove(PlayerTypes.USER, row, column);
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.tic-tac-toe {
  margin: 0 auto;
}

.tic-tac-toe-squares {
  margin-top: 1.5em;
}

.squares-row {
  display: flex;
  align-items: center;
}
</style>
