<template>
  <div class="flex flex-row">
    <div class="pt-6">
      <div
        class="flex flex-column flex-auto flex-basis slide"
        :style="`width:${$isMobile() ? '80.5vw' : '42.5vw'};`"
      >
        <slot name="header"></slot>
        <Button
          class="border-noround-top"
          :label="showClass ? 'Read More' : 'Read Less'"
          @click="handleClick"
        />
        <div :class="showClass">
          <slot name="content"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="text flex" :class="{ 'flex-column-reverse': isBottom }">
      {{ props.year }}
    </div>

    <div
      class="flex flex-grow"
      :class="{ 'border-right': isTop, bottom: isBottom, dash: !isBottom }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, withDefaults, defineProps } from "vue";
import Button from "primevue/button";

interface Props {
  canToggle?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
  year?: string;
}

const props = withDefaults(defineProps<Props>(), {
  canToggle: false,
  isTop: false,
  isBottom: false,
});
const isOpen = ref(false);
const showClass = computed(() => {
  return isOpen.value ? "" : "hidden";
});
const handleClick = () => {
  if (!props.canToggle) {
    return;
  }
  isOpen.value = !isOpen.value;
};
</script>
<style scoped>
.slide {
  background-color: #161b22;
  border-radius: 1rem;
  max-width: 1046px;
}

.border-right {
  border-right: 1px solid #fff;
}

.dash {
  margin-top: 0.5rem;
  border-top: 1px solid #fff;
  width: 1rem;
  margin-left: 1rem;
  -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box; /* Firefox, other Gecko */
  box-sizing: content-box; /* Opera/IE 8+ */
}

.bottom {
  margin-top: 0.5rem;
  border-bottom: 1px solid #fff;
  width: 1rem;
  margin-left: 1rem;
  -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box; /* Firefox, other Gecko */
  box-sizing: content-box; /* Opera/IE 8+ */
}
.text {
  padding-left: 1rem;
}
</style>
