<script setup lang="ts">
defineProps<{
  player: string | null;
}>();
</script>

<template>
  <div class="tic-tac-toe-square">
    <div :class="[classes, 'bold']" :aria-label="ariaLabel">{{ player }}</div>
  </div>
</template>

<script lang="ts">
// Libs
import { defineComponent } from "vue";

// Constants
import { PlayerTypes } from "@/enums/PlayerTypes";

// Styles
import "@/assets/helpers.css";
import "@/assets/colors.css";

export default defineComponent({
  name: "TicTacToeSquare",

  computed: {
    classes(): string {
      if (this.player === PlayerTypes.USER) {
        return "color-red";
      } else if (this.player === PlayerTypes.COMPUTER) {
        return "color-green";
      }
      return "default";
    },

    ariaLabel(): string {
      if (!this.player) {
        return "An empty clickable square";
      }

      return `A square with a "${this.player}" in it`;
    },
  },
});
</script>

<style scoped>
.tic-tac-toe-square {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5em;
  height: 3.5em;
  border: 1px solid black;
  cursor: pointer;
  user-select: none;
}
</style>
