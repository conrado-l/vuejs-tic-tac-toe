<script setup>
defineProps({
  player: String,
  index: Number,
});
</script>

<template>
  <div class="tic-tac-toe-square">
    <div :class="classes">{{ player }}</div>
  </div>
</template>

<script>
export default {
  name: "TicTacToeSquare",

  computed: {
    classes() {
      if (this.player === "X") {
        return "cross";
      } else if (this.player === "0") {
        return "circle";
      }
      return "default";
    },
  },
};
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
}
.cross {
  color: red;
}

.circle {
  color: green;
}
</style>
