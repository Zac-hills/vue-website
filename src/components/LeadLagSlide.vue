<template>
  <div>
    <AnimatedSlide :canToggle="true" year="2019">
      <template #header>
        <img src="/leadlag-header.png" class="max-width-40" />
      </template>
      <template #content>
        <div class="text-left p-3">
          <h2>Consilium Maps</h2>
          <p class="text">
            Consilium Maps is a data exploratory tool based on the lead-lag
            metric, which measures the offset between research outputs of
            different countries. For example, a search for "spinach" shows how
            each country’s research output compares to Canada’s. This tool uses
            data from
            <a href="https://www.dimensions.ai/">Dimensions.AI</a>, which
            includes over 108 million papers with metadata on authors,
            affiliations, funding, citations, and patents.
          </p>
          <p class="text">
            To manage the vast dataset, we use a progressive loader that allows
            interaction with partially loaded data. The scrubber represents
            Canada’s data and can be resized to select between 3 and 10 years.
            This helps users gauge areas of interest in Canada’s research output
            over time.
            <img
              src="/leadlag-scrubber.png"
              alt="Scrubber interface displaying a portion of Canada's research data. Users can interact with and resize this tool to view different time spans of data, which helps in analyzing trends and areas of interest."
              class="p-2"
              />
          </p>
          <p class="text">
            Event graphs highlight regions with the most significant lead, lag,
            and participation from various countries. These graphs provide a
            clear visualization of global research dynamics and help identify
            key trends and areas with notable research activity.
            <img
              src="/leadlag-events.png"
              alt="Event graphs showcasing regions with the highest lead and lag in research output. The graphs also highlight regions with the most participating countries, providing an overview of global research trends."
              class="p-2"
              />
          </p>
          <p class="text">
            After selecting a timespan, users can view individual institutions'
            outputs relative to Canada. Nodes on the map indicate whether an
            institution is leading or lagging in research output compared to
            Canada. Trend lines on these nodes show significant changes in
            output, with an upward trend indicating a 5% or more increase.
            <img
              src="/leadlag-nodes.png"
              alt="Map showing individual institutions with nodes indicating their research output relative to Canada. Each node’s color represents lead or lag status, and the trend line displays changes in output over the selected timespan."
              class="w-full p-2"
            />
          </p>
          <p class="text">
            Consilium Maps aims to provide stakeholders with valuable insights
            into institutional performance on a global scale, helping to assess
            how well different institutions and countries are performing in
            various research areas.
          </p>
        </div>
      </template>
    </AnimatedSlide>
  </div>
</template>

<script lang="ts" setup>
import AnimatedSlide from "@/components/AnimatedSlide.vue";
</script>

<style scoped>
.text-left {
  text-align: left;
}

.max-width-20 {}
</style>
