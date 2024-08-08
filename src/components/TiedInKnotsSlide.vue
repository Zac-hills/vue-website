<template>
  <AnimatedSlide>
    <template #header>
      <iframe
        src="https://vialab.github.io/tied-in-knots/#/"
        class="aspect"
      ></iframe>
    </template>
    <template #content>
      <h2>Tied In Knots</h2>
      <p>
        Tied in Knots is an interactive visualization with the objective of
        providing insight and spread awareness about sexual assaults in
        academia. One of the challenges of this project is to provide analytics
        without minimizing the individual accounts. The typical methods for data
        visualization use some form of summary in order to simplify the dataset
        allowing the user to gleam insights more quickly with less "clutter".
        When the data you are dealing with is the individual's first hand
        account of their traumatic experience the traditional methods of summary
        is not only incorrect and inappropriate -- the traditional approaches
        are damaging and minimizes the individual's traumatic experience.
      </p>
      <p>
        The challenge of keeping every data point as part of the visualization
        brought a necessity for high performance rendering. There was also the
        goal for mobile and tablet support which further increased the need for
        a high performance rendering solution. The original solution used D3 and
        SVG in order to create the text that followed the spline. Upon clicking
        the text the text would unravel allowing the user to see the first hand
        accounts of that particular person. The "knots" themselves are tied
        based on their
        <a href="https://en.wikipedia.org/wiki/Coding_(social_sciences)"
          >manual coding</a
        >. Due to the use of text and the necessity for grouping and performing
        animations on them the initial prototype struggled to run on modern
        laptops.
      </p>
      <p>
        My task was to increase performance while keeping the same design. D3
        uses SVG which is a mature technology however it lacks the performance
        that WebGL can offer. The solution that gave the best performance was
        switching to a WebGL based rendering system using the library Pixi.js.
        Even with WebGL's performance increases it was not enough to support
        straight text rendering. I created a tool that exported the SVG text to
        a png at the required resolution, the new images were added to a texture
        atlas so the application only had to do one texture binding which
        dramatically increased performance. To address the unraveling of the
        text a hybrid method was created. When the user clicks on one of the
        text images, a svg is created with the text and the knot is unravelled.
        The overall solution gave a performance increase of over 1400%, while
        meeting all of the design and platform criteria.
      </p>
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
</style>
