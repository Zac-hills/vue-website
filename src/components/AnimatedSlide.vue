<template>
  <div class="flex flex-column flex-auto flex-basis slide" @click="handleClick">
      <slot name="header"></slot>
      <div :class="showClass">
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, withDefaults, defineProps } from 'vue';

interface Props {
  canToggle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {canToggle: false});
const isOpen = ref(false);
const showClass = computed(() => {
  return isOpen.value ? "" : "hidden"
})
const handleClick = () => {
  if(!props.canToggle) {
    return;
  }
  isOpen.value = !isOpen.value;
};

</script>
<style scoped>
  .slide {
    background-color: #161B22;
    padding: 1rem;
    border-radius: 1rem;
    margin-left: 5rem;
    width: 42.5vw;
    margin-bottom: 3rem;
  }
</style>