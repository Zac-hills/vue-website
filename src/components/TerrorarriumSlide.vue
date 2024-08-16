<template>
  <AnimatedSlide canToggle year="2023">
    <template #header>
      <img src="/terrorarium.png" />
    </template>
    <template #content>
      <div class="p-3 text-left">
        <h2>Terrorarium - Senior Software Engineer</h2>
        <p>
          As a Senior Software Engineer on the Terrorarium project, I played a
          pivotal role in extending and enhancing an already beloved game. My
          primary responsibility was to develop a substantial expansion that not
          only added new levels, mechanics, and challenges but also preserved
          the essence of the original gameplay that fans had come to love. This
          involved working closely with designers and artists to ensure that the
          new content seamlessly integrated into the existing game world,
          maintaining a consistent and engaging player experience.
        </p>
        <p>
          In addition to content development, I took the lead in integrating
          support for the TiltFive platform, a cutting-edge mixed reality
          technology. This required adapting and optimizing Terrorarium for a
          new dimension of gameplay, allowing players to experience the game in
          an entirely new way. I developed custom Unity engine plugins that
          facilitated this integration, ensuring that the game could leverage
          TiltFive’s unique capabilities without sacrificing performance or
          stability.
        </p>
        <p>
          The work on this project involved a deep dive into Unity’s engine
          architecture, where I implemented new tools and processes to
          streamline the development pipeline. These tools not only sped up the
          iteration process but also ensured that all team members could work
          efficiently within the expanded scope of the game. My contributions
          helped to ensure that the final product was polished, innovative, and
          delivered on time, providing players with a rich and immersive
          experience.
        </p>
      </div>
    </template>
  </AnimatedSlide>
</template>

<script lang="ts" setup>
import AnimatedSlide from "@/components/AnimatedSlide.vue";
</script>

<style scoped>
.text-left {
  text-align: left;
}
</style>
