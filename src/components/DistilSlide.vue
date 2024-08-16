<template>
  <AnimatedSlide canToggle year="2020">
    <template #header>
      <img src="/distil-map.gif" alt="Distil Map" />
    </template>
    <template #content>
      <div class="text-left p-3">
        <h2>Distil - Software Engineer</h2>
    <ul>
        <li><strong>Developing the Interactive Analytic Workflow:</strong>
            <ul>
                <li>Designed and implemented the user interface for the question-first analytic process.</li>
                <li>Created interactive tools and components to guide users through problem definition and solution exploration.</li>
                <li>Integrated backend services to support dynamic data interaction and workflow management.</li>
            </ul>
        </li>
        <li><strong>Implementing Data Discovery and Enrichment:</strong>
            <ul>
                <li>Built and optimized data retrieval systems to facilitate the discovery of relevant datasets.</li>
                <li>Developed data enrichment algorithms and integrated external data sources to enhance dataset quality and relevance.</li>
                <li>Ensured seamless data integration and preprocessing pipelines.</li>
            </ul>
        </li>
        <li><strong>Creating Model Recommendation Systems:</strong>
            <ul>
                <li>Designed and developed machine learning algorithms for model recommendation based on user-defined problems and data characteristics.</li>
                <li>Implemented model selection and evaluation logic to suggest appropriate analytic models.</li>
                <li>Integrated recommendation systems into the user interface for a smooth user experience.</li>
            </ul>
        </li>
        <li><strong>Developing Automated Visualization Features:</strong>
            <ul>
                <li>Implemented algorithms for automated visualization of data and model results.</li>
                <li>Designed and created visualization components to help users interpret model outputs and data insights.</li>
                <li>Integrated visualization tools into the user interface for real-time analysis and adjustments.</li>
            </ul>
        </li>
        <li><strong>Building Ambient Visualization and Information Retrieval Systems:</strong>
            <ul>
                <li>Developed features for document organization and classification using inferred tags from classifiers.</li>
                <li>Implemented tagging and retrieval systems to enhance document management and organization.</li>
                <li>Integrated these features with existing document management systems for improved user experience.</li>
            </ul>
        </li>
        <li><strong>Implementing Semi-Supervised Machine Learning Techniques:</strong>
            <ul>
                <li>Designed and developed algorithms combining supervised and unsupervised learning techniques for iterative model refinement.</li>
                <li>Implemented systems to handle both labeled and unlabeled data for improving model accuracy.</li>
                <li>Integrated semi-supervised learning components into the overall modeling workflow.</li>
            </ul>
        </li>
    </ul>
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
