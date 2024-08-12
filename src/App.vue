<template>
  <div class="h-screen w-screen flex flex-column overflow-hidden no-scrollbar">
    <div
      class="flex flex-row justify-content-center no-scrollbar overflow-hidden"
    >
      <div class="slide flex align-items-center pr-5vw overflow-hidden">
        <div>
          <div class="flex justify-content-between">
            <h1 class="text-left p-3">Zachary Hills, BIT, MSc</h1>
            <div class="p-3 flex align-items-center">
              <i class="pi pi-github p-3"></i>
              <i class="pi pi-linkedin p-3"></i>
            </div>
          </div>
          <Divider />
          <h3 class="text-left">Experience:</h3>
          <p class="text-left w-8 pl-3">
            I am a Senior Full Stack Engineer and Data Scientist with extensive
            experience working on DARPA and IARPA contracts. My expertise spans
            a diverse range of applications, from leveraging AI for Forensic
            Linguistics to enhancing spectral imagery with advanced AI
            techniques. Additionally, I have a strong background in designing
            and implementing horizontal scaling architecture to ensure robust
            and efficient system performance.
          </p>
        </div>
      </div>
      <div
        class="flex flex-column overflow-y-auto overflow-x-hidden no-scrollbar mb-6"
        ref="container"
      >
        <SignatureSlide />
        <TerrorarriumSlide class="border-right" />
        <DistilSlide class="border-right" />
        <SpatialEvalSlide class="border-right" />
        <TiedInKnotsSlide class="border-right" />
        <LeadLagSlide />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SignatureSlide from "./components/SignatureSlide.vue";
import LeadLagSlide from "./components/LeadLagSlide.vue";
import SpatialEvalSlide from "./components/SpatialEvalSlide.vue";
import TiedInKnotsSlide from "./components/TiedInKnotsSlide.vue";
import DistilSlide from "./components/DistilSlide.vue";
import TerrorarriumSlide from "./components/TerrorarriumSlide.vue";
import Divider from "primevue/divider";
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
.border-right {
  border-right: 1px solid #fff;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
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

.pr-5vw {
  padding-right: 5vw;
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
