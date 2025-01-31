<template>
  <AnimatedSlide year="2025" canToggle>
    <template #header>
      <img src="/DRIFT-search.jpg" />
    </template>
    <template #content>
      <div class="text-left p-3">
        <h2>DRIFT - Software Engineer</h2>
      </div>
    </template>
  </AnimatedSlide>
</template>
<script lang="ts" setup>
import AnimatedSlide from "@/components/AnimatedSlide.vue";
</script>

<style scoped>
.aspect {
  aspect-ratio: 16 / 9;
}

.text-left {
  text-align: left;
}
</style>
