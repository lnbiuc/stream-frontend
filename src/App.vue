<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main>
</template>
<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
</script>
