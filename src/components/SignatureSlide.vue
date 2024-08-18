<template>
  <AnimatedSlide isTop canToggle year="2024">
    <template #header>
      <video controls>
        <source src="signature.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </template>
    <template #content>
      <div class="text-left p-3">
        <h2>Signature - Senior Software Engineer</h2>
        <p>
          I was the sole developer on the Signature project, responsible for its
          design, implementation, and deployment. Signature is a web application
          tailored for Forensic Linguistic Analysts, enabling them to apply
          their expertise at scale—a significant improvement in a field
          traditionally dominated by labor-intensive processes.
        </p>
        <p>
          Forensic Linguistics typically requires a high level of expertise,
          with analysts spending many hours to meticulously analyze a single
          document. Signature addresses this challenge by providing tools that
          allow analysts to markup and define patterns in text, which can then
          be applied across an entire corpus. This capability means that once an
          analyst identifies specific features in one document, those features
          can be used to automatically scan the entire dataset for similar
          characteristics.
        </p>
        <p>
          This approach allows analysts to quickly identify other relevant
          documents, significantly speeding up the process and improving
          efficiency in cases requiring linguistic analysis.
        </p>
        <p>
          Signature’s architecture uses a horizontal scaling approach for the
          ingest pipeline, designed to handle vast amounts of data and integrate
          additional processing steps seamlessly. This scalability ensures that
          the system can grow and adapt to the increasing demands of forensic
          analysis, making it a powerful tool for analysts working on complex
          cases.
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
