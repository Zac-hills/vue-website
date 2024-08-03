<template>
  <div class="h-screen w-screen flex flex-column overflow-hidden no-scrollbar">
    <TimelineVisual @index="onIndex" />
    <div class="flex flex-row overflow-auto no-scrollbar" ref="container">
      <AnimatedSlide class="slide height-fit-content" :key="index">
        <template #header>
          <div class="flex justify-content-between">
            <h1 class="text-left p-3 width-80">Zachary Hills</h1>
            <div class="p-3 flex align-items-center">
              <i class="pi pi-github p-3"></i>
              <i class="pi pi-linkedin p-3"></i>
            </div>
          </div>
          <Divider />
        </template>
        <template #content>
          <div>
            <div>
              <h3 class="text-left">Experience:</h3>
              <p class="text-left w-6">
                I am a Senior Full Stack Engineer and Data Scientist with
                extensive experience working on DARPA and IARPA contracts. My
                expertise spans a diverse range of applications, from leveraging
                AI for Forensic Linguistics to enhancing spectral imagery with
                advanced AI techniques. Additionally, I have a strong background
                in designing and implementing horizontal scaling architecture to
                ensure robust and efficient system performance.
              </p>
              <div class="flex flex-column">
                <div class="flex flex-row w-full h-6rem container p-3 mb-3">
                  <h3 class="text-left">Front Ends</h3>
                </div>
                <div class="flex flex-row w-full h-6rem container p-3 mb-3">
                  <h3 class="text-left">Back Ends</h3>
                </div>
                <div class="flex flex-row w-full h-6rem container p-3">
                  <h3 class="mr-3">Databases</h3>
                  <Chip label="Postgres" class="h-3rem m-1">
                    <img
                      class="h-2rem"
                      src="/postgresql.svg"
                      alt="Postgres logo"
                    />
                    <span>Postgres</span>
                  </Chip>
                  <Chip label="MongoDB" class="h-3rem m-1">
                    <img class="h-2rem" src="/mongodb.png" alt="MongoDB logo" />
                    <span>MongoDB</span>
                  </Chip>
                  <Chip label="Redis" class="h-3rem m-1">
                    <img class="h-2rem" src="/redis.png" alt="Redis logo" />
                    <span>Redis</span>
                  </Chip>
                  <Chip label="Elasticsearch" class="h-3rem m-1">
                    <img
                      class="h-2rem"
                      src="/elasticsearch.svg"
                      alt="Elasticsearch logo"
                    />
                    <span>Elasticsearch</span>
                  </Chip>
                  <Chip label="ArangoDB" class="h-3rem m-1">
                    <img
                      class="h-2rem"
                      src="/arango-icon.png"
                      alt="ArangoDB logo"
                    />
                  </Chip>
                </div>
                <Chip label="Hugging Face">
                  <img
                    class="h-2rem"
                    src="/hf-logo.svg"
                    alt="Hugging Face logo"
                  />
                  <span>HuggingFace</span>
                </Chip>
              </div>
            </div>
          </div>
        </template>
      </AnimatedSlide>
      <AnimatedSlide class="slide height-fit-content">
        <template #header>
          <img src="/leadlag-header.png" class="max-width-80" />
        </template>
        <template #content>
          <div class="blog-post-wrapper">
            <h2>Consilium Maps</h2>
            <p class="text">
              Consilium Maps is a data exploratory tool based on the lead-lag
              metric, which measures the offset between research outputs of
              different countries. For example, a search for "spinach" shows how
              each country’s research output compares to Canada’s. This tool
              uses data from
              <a href="https://www.dimensions.ai/">Dimensions.AI</a>, which
              includes over 108 million papers with metadata on authors,
              affiliations, funding, citations, and patents.
            </p>
            <p class="text">
              To manage the vast dataset, we use a progressive loader that
              allows interaction with partially loaded data. The scrubber
              represents Canada’s data and can be resized to select between 3
              and 10 years. This helps users gauge areas of interest in Canada’s
              research output over time.
              <img
                src="/leadlag-scrubber.png"
                alt="Scrubber interface displaying a portion of Canada's research data. Users can interact with and resize this tool to view different time spans of data, which helps in analyzing trends and areas of interest."
              />
            </p>
            <p class="text">
              Event graphs highlight regions with the most significant lead,
              lag, and participation from various countries. These graphs
              provide a clear visualization of global research dynamics and help
              identify key trends and areas with notable research activity.
              <img
                src="/leadlag-events.png"
                alt="Event graphs showcasing regions with the highest lead and lag in research output. The graphs also highlight regions with the most participating countries, providing an overview of global research trends."
              />
            </p>
            <p class="text">
              After selecting a timespan, users can view individual
              institutions' outputs relative to Canada. Nodes on the map
              indicate whether an institution is leading or lagging in research
              output compared to Canada. Trend lines on these nodes show
              significant changes in output, with an upward trend indicating a
              5% or more increase.
              <img
                src="/leadlag-nodes.png"
                alt="Map showing individual institutions with nodes indicating their research output relative to Canada. Each node’s color represents lead or lag status, and the trend line displays changes in output over the selected timespan."
              />
            </p>
            <p class="text">
              Consilium Maps aims to provide stakeholders with valuable insights
              into institutional performance on a global scale, helping to
              assess how well different institutions and countries are
              performing in various research areas.
            </p>
          </div>
        </template>
      </AnimatedSlide>
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
</template>

<script lang="ts" setup>
import TimelineVisual from "./components/TimelineVisual.vue";
import AnimatedSlide from "./components/AnimatedSlide.vue";
import Divider from "primevue/divider";
import Chip from "primevue/chip";
import { ref } from "vue";

const index = ref(0);
const container = ref();

const onIndex = (idx: number) => {
  console.log(container.value);
  index.value = idx;
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
  max-width: 1064px;
  margin-left: 10vw;
  margin-right: 10vw;
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
