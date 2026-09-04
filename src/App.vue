<script setup lang="ts">
import ObjectProfilePanel from './components/ObjectProfilePanel.vue'
import { trendAi } from '@/data/trendAi'
</script>

<template>
  <main class="flex min-h-full justify-center bg-page-background py-10">
    <ObjectProfilePanel :profile="trendAi" />
  </main>
</template>
