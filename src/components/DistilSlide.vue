<template>
  <AnimatedSlide canToggle year="2020">
    <template #header>
      <img src="/distil-map.gif" alt="Distil Map" />
    </template>
    <template #content>
      <div class="text-left p-3">
        <h1>Distil: A Mixed-Initiative Model Discovery System</h1>
        <p>
          Distil is a sophisticated tool designed to assist subject matter
          experts in generating data-driven models through a mixed-initiative
          approach. It combines several key functionalities to achieve this:
        </p>
        <ul>
          <li>
            <strong>Interactive Analytic Workflow</strong>: Users are guided
            through an analytic question-first process, starting with defining
            the problem and exploring potential solutions interactively.
          </li>
          <li>
            <strong>Data Discovery and Enrichment</strong>: The system
            facilitates the discovery of relevant data and its subsequent
            enrichment, ensuring that the data used is both comprehensive and
            pertinent.
          </li>
          <li>
            <strong>Model Recommendation</strong>: Distil leverages machine
            learning to recommend suitable analytic models based on the data and
            the problem defined by the user.
          </li>
          <li>
            <strong>Automated Visualization</strong>: To aid in understanding
            and refining the models, the tool provides automated visualizations
            that help users interpret the results and make necessary
            adjustments.
          </li>
          <li>
            <strong>Ambient Visualization and Information Retrieval</strong>:
            These features help users in organizing documents by tags inferred
            by resultant classifiers, enhancing document classification and
            organization.
          </li>
          <li>
            <strong>Semi-Supervised Machine Learning</strong>: This aspect
            allows users to refine their models iteratively, improving accuracy
            and performance through a combination of supervised and unsupervised
            learning techniques.
          </li>
        </ul>
        <p>
          Overall, Distil aims to empower non-data scientists by providing an
          intuitive and interactive platform for high-quality model development
          and data analysis.
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
