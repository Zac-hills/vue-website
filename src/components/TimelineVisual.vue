<template>
  <div class="w-full flex align-items-center justify-content-center">
    <Timeline
      :value="events"
      layout="horizontal"
      align="alternate"
      class="max-w-30rem"
    >
      <template #marker="{ index }">
        <div
          class="p-timeline-event-marker"
          @click="handleClick(index)"
          :class="{ highlighted: index == currentIndex }"
        />
      </template>
      <template #opposite> &nbsp; </template>
      <template #content="slotProps">
        {{ slotProps.item }}
      </template>
    </Timeline>
  </div>
</template>

<script lang="ts" setup>
import Timeline from "primevue/timeline";
import { ref, defineEmits } from "vue";
interface Emit {
  (event: "index", index: number): void;
}
const currentIndex = ref(0);
const emits = defineEmits<Emit>();
const events = ["About", "2024", "2022", "2020"];
const handleClick = (index: number) => {
  currentIndex.value = index;
  emits("index", index);
};
</script>
<style scoped>
:deep(.p-timeline-event-marker):hover {
  background-color: #42b983;
  color: #ffffff;
}
.highlighted {
  background-color: #42b983;
  color: #ffffff;
}
</style>
