<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";
const { Layout } = DefaultTheme
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
.title {
  color: red;
}
</style>