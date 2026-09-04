<script setup lang="ts">
import scoreRing from '@/assets/icons/score-ring.svg'

/*
 * The ring is a fixed 8/10 arc exported from Figma. A live component would take
 * the arc length from `score`; see the README.
 */
defineProps<{ score: number }>()
</script>

<template>
  <div class="relative size-8 shrink-0 overflow-clip rounded-full bg-green-bg-subtle">
    <img :src="scoreRing" alt="" class="absolute inset-0 block size-full" />
    <span
      class="absolute inset-0 flex items-center justify-center text-3 font-medium text-green-label"
    >
      {{ score }}
    </span>
  </div>
</template>
