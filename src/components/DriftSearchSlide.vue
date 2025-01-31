<template>
  <AnimatedSlide isTop year="2025" canToggle>
    <template #header>
      <img src="/DRIFT-search.jpg" />
    </template>
    <template #content>
      <div class="text-left p-3">
        article:
        <a
          href="https://www.microsoft.com/en-us/research/blog/introducing-drift-search-combining-global-and-local-search-methods-to-improve-quality-and-efficiency/"
          >https://www.microsoft.com/en-us/research/blog/introducing-drift-search-combining-global-and-local-search-methods-to-improve-quality-and-efficiency/</a
        >
        <h2>DRIFT - Software Engineer</h2>
        <p>
          As the Senior Software Engineer on the DRIFT Search project, my
          responsibilities encompassed the following:
        </p>

        <p>
          <strong>System Design and Architecture:</strong> I led the design and
          development of DRIFT Search, an enhancement to the GraphRAG query
          engine that integrates global community insights into local search
          processes. This integration broadens the initial query scope, enabling
          the retrieval of a more diverse set of facts for comprehensive
          answers.
        </p>

        <p>
          <strong>Implementation of the Primer Module:</strong> I developed the
          primer phase, where user queries are compared to the top K
          semantically relevant community reports. This process generates an
          initial answer and follow-up questions, leveraging Hypothetical
          Document Embeddings (HyDE) to expand the query and increase recall.
        </p>

        <p>
          <strong>Development of the Follow-Up Mechanism:</strong> I implemented
          the follow-up phase, executing each follow-up question using a local
          search variant. This iterative refinement loop continues until
          termination criteria are met, allowing DRIFT to adjust its approach
          based on emerging information.
        </p>

        <p>
          <strong>Creation of the Output Hierarchy:</strong> I designed the
          system to produce a hierarchical structure of questions and answers,
          ranked by relevance to the original query. This customizable structure
          ensures a balanced mix of global insights and local refinements,
          providing adaptable and comprehensive results.
        </p>

        <p>
          <strong>Benchmarking and Performance Evaluation:</strong> I conducted
          comparative analyses to evaluate DRIFT Search's performance against
          existing methods. The assessments focused on key metrics such as
          comprehensiveness and diversity of responses, demonstrating DRIFT's
          superiority in both areas.
        </p>

        <p>
          <strong>Collaboration and Future Enhancements:</strong> I collaborated
          with cross-functional teams to explore future research directions,
          including incorporating improved versions of global search and
          evolving DRIFT's termination logic through reward models.
        </p>

        <p>
          Through these efforts, I contributed to the development of a dynamic
          search methodology that effectively combines global and local search
          techniques, enhancing both the quality and efficiency of information
          retrieval.
        </p>
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
