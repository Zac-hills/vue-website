<template>
  <AnimatedSlide isTop canToggle year="2024">
    <template #header>
      <video controls>
        <source src="signature.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </template>
  </AnimatedSlide>
</template>

<script lang="ts" setup>
import AnimatedSlide from "@/components/AnimatedSlide.vue";
</script>
