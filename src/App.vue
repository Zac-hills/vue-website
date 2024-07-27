<template>
  <div class="h-screen w-screen flex flex-column overflow-hidden no-scrollbar">
    <TimelineVisual @index="onIndex" />
    <div class="flex flex-row overflow-auto no-scrollbar" ref="container">
      <AnimatedSlide class="slide" :key="index">
        <template #header>
          <img src="/leadlag-header.png" class="max-width-80" />
        </template>
        <template #content>
          <p>Slide 1 content</p>
        </template>
      </AnimatedSlide>
      <AnimatedSlide class="slide" :key="index">
        <template #header>
          <img src="/leadlag-header.png" class="max-width-80" />
        </template>
        <template #content>
          <p>Slide 2 content</p>
        </template>
      </AnimatedSlide>
      <AnimatedSlide class="slide" :key="index">
        <template #header>
          <img src="/leadlag-header.png" class="max-width-80" />
        </template>
        <template #content>
          <p>Slide 3 content</p>
        </template>
      </AnimatedSlide>
      <AnimatedSlide class="slide" :key="index">
        <template #header>
          <img src="/leadlag-header.png" class="max-width-80" />
        </template>
        <template #content>
          <p>Slide 4 content</p>
        </template>
      </AnimatedSlide>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimelineVisual from "./components/TimelineVisual.vue";
import AnimatedSlide from "./components/AnimatedSlide.vue";
import { Ref, ref } from "vue";

const index = ref(0);
const container = ref();
const onIndex = (idx: number) => {
  console.log(container.value);
  container.value.scrollTo({
    left: idx * window.innerWidth,
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  min-width: 0px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.slide {
  width: 80vw;
  height: 80vh;
  margin-left: 10vw;
  margin-right: 10vw;
}

.max-width-80 {
  max-width: 80vw;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
