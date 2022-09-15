<template>
  <div>
    <p class="bold">Instructions:</p>
    <ul>
      <li>
        <p>
          The goal is to win the game by having/clicking
          <span class="bold">3 </span> "X"s in a row, vertically, horizontally
          or in diagonal way.
        </p>
      </li>
      <li>
        <p>
          When the game starts, either the computer or the user will get picked
          to play first, you can see who's currently playing in the section
          above the board, named "Current player: X or O".
        </p>
      </li>
    </ul>
    <p class="controls bold">Controls:</p>
    <ul>
      <li>
        <p>
          Restart game: it clears the entire board and restarts the game and the
          computer or user gets picked to play first randomly.
        </p>
      </li>
      <li>
        <p>
          If "nothing" happens when you click the button, is because the text
          and board stayed the same because the user got picked again.
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import "@/assets/fonts.css";

export default {
  name: "TicTacToeInstructions",
};
</script>

<style scoped>
.controls {
  text-align: left;
  margin-top: 1em;
}
</style>
