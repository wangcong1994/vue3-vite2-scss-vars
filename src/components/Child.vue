<template>
  <div :style="{ color: fontText }">1111</div>
  <div class="font">2222</div>
</template>

<script setup>
import { fontText } from "@style/variables.module.scss";
</script>

<style lang="scss" scoped>
.font {
  color: $fontColor;
}
</style>
