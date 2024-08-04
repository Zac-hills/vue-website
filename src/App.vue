<template>
  <div class="h-screen w-screen flex flex-column overflow-hidden no-scrollbar">
    <TimelineVisual @index="onIndex" />
    <div class="flex flex-row overflow-auto no-scrollbar">
      <AboutSlide ref="slide1" />
      <div
        class="flex flex-column overflow-y-auto overflow-x-hidden no-scrollbar"
        ref="container"
      >
        <LeadLagSlide ref="slide2" />
        <AnimatedSlide class="slide height-fit-content" :key="index">
          <template #header>
            <img src="/leadlag-header.png" class="max-width-80" />
          </template>
          <template #content>
            <p>Slide 2 content</p>
          </template>
        </AnimatedSlide>
        <AnimatedSlide class="slide height-fit-content" :key="index">
          <template #header>
            <img src="/leadlag-header.png" class="max-width-80" />
          </template>
          <template #content>
            <p>Slide 3 content</p>
          </template>
        </AnimatedSlide>
        <AnimatedSlide class="slide height-fit-content" :key="index">
          <template #header>
            <img src="/leadlag-header.png" class="max-width-80" />
          </template>
          <template #content>
            <p>Slide 4 content</p>
          </template>
        </AnimatedSlide>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TimelineVisual from "./components/TimelineVisual.vue";
import AnimatedSlide from "./components/AnimatedSlide.vue";
import { Ref, ref } from "vue";
import AboutSlide from "./components/AboutSlide.vue";
import LeadLagSlide from "./components/LeadLagSlide.vue";

const index = ref(0);
const container = ref();
const slide1 = ref<InstanceType<typeof AboutSlide>>();
const slide2 = ref<InstanceType<typeof LeadLagSlide>>();
const slide3 = ref<InstanceType<typeof AboutSlide>>();
const slide4 = ref<InstanceType<typeof AboutSlide>>();

const onIndex = (idx: number) => {
  const slide = getSlideRef(idx);
  if (!slide) return;
  console.log(slide.$el);
  index.value = idx;
  container.value.scrollTo({
    top: slide.$el.offsetTop,
    behavior: "smooth",
  });
};

const getSlideRef = (index: number) => {
  switch (index) {
    case 0:
      return slide1.value;
    case 1:
      return slide2.value;
    case 2:
      return slide3.value;
    case 3:
      return slide4.value;
    default:
      return null;
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
<style scoped>
.container {
  min-width: 0px;
}

.slide {
  width: 42.5vw;
  max-width: 1064px;
  margin-left: 5vw;
  min-height: 70vh;
  animation: squash 1s;
  animation-timing-function: ease-in-out;
}

.width-80 {
  width: 80vw;
}
.max-width-80 {
  max-width: 80vw;
}
.max-width-40 {
  max-width: 40vw;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.blog-post-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Space between the text and the image */
}

.blog-post-wrapper img {
  max-width: 30rem;
  height: auto;
  flex: 1 1 auto; /* Allows images to shrink and grow */
}

.blog-post-wrapper .text {
  flex: 1 1 auto; /* Allows text to shrink and grow */
  max-width: calc(100% - 200px); /* Adjust according to image size */
}

.height-fit-content {
  height: fit-content;
}

@media (max-width: 768px) {
  .blog-post-wrapper {
    flex-direction: column;
  }
  .blog-post-wrapper .text,
  .blog-post-wrapper img {
    max-width: 100%;
  }
}

.container {
  background: var(--p-surface-800);
  border-radius: var(--p-card-border-radius);
}

@keyframes squash {
  0% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(0.8);
  }
  80% {
    transform: scaleY(0.8);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
