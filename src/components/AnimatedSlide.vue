<template>
  <div class="flex flex-row">
    <div class="pt-6">
      <div
        class="flex flex-column flex-auto flex-basis slide"
        @click="handleClick"
      >
        <slot name="header"></slot>
        <div :class="showClass">
          <slot name="content"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="text">2020</div>

    <div class="dash flex flex-grow" :class="{ 'border-right': isTop }"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, withDefaults, defineProps } from "vue";

interface Props {
  canToggle?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
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
  width: 42.5vw;
  max-width: 1046px;
}
.border-right {
  border-right: 1px solid #fff;
  border-top-right-radius: 3px;
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

.text {
  padding-left: 1rem;
}
</style>
