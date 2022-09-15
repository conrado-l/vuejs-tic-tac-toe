<template>
  <div class="container">
    <div class="tic-tac-toe">
      <h1 class="text-align-center">Tic Tac Toe</h1>

      <!-- Messages -->
      <p
        :class="[winnerMessageClass, 'bold', 'text-align-center']"
        v-if="winnerMessage"
      >
        {{ winnerMessage }}
      </p>
      <p class="text-align-center" v-else>
        Current player: {{ currentPlayer }}
      </p>
      <!---->

      <!-- Game board -->
      <div v-if="ticTacToe" class="tic-tac-toe-squares">
        <div class="squares-row" v-for="(row, i) in board" :key="i">
          <TicTacToeSquare
            v-for="(_, n) in row"
            :key="n"
            :player="board[i][n]"
            @click="onSquareClick(i, n)"
          ></TicTacToeSquare>
        </div>
        <!---->
      </div>

      <!-- Restart game button -->
      <div class="text-align-center">
        <button
          class="restart-game-button button-red"
          @click="ticTacToe.initializeGame"
        >
          Restart game
        </button>
      </div>
      <!---->

      <!-- Game instructions/info -->
      <TicTacToeInstructions class="instructions"></TicTacToeInstructions>
      <!---->
    </div>
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

// Styles
import "@/assets/helpers.css";
import "@/assets/colors.css";
import "@/assets/buttons.css";
import "@/assets/fonts.css";

// Types
import type { Board } from "@/types/Board";
import { PlayerTypes } from "@/enums/PlayerTypes";

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
    board(): Board {
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
}

.tic-tac-toe-squares {
  margin-top: 1.5em;
}

.squares-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.restart-game-button {
  margin-top: 2.5em;
}

.instructions {
  margin-top: 2em;
}
</style>
