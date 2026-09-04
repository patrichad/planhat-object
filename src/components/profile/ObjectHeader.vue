<script setup lang="ts">
import HealthScore from '@/components/ui/HealthScore.vue'

defineProps<{ name: string; healthScore: number }>()
</script>

<template>
  <div class="flex h-[30px] shrink-0 items-center gap-3">
    <HealthScore :score="healthScore" />
    <h1 class="text-5 font-semibold whitespace-nowrap text-text-contrast">{{ name }}</h1>
  </div>
</template>
