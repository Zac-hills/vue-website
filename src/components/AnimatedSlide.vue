<template>
  <Card>
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #content>
      <slot name="content"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import Card from "primevue/card";

const handleClick = () => {
  console.log("clicked");
};
</script>
