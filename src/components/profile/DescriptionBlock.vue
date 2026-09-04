<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <section class="flex shrink-0 flex-col gap-[5px]">
    <div class="flex h-[27px] items-center py-1">
      <h2 class="text-3 font-medium text-text-subtle">Description</h2>
    </div>
    <p class="text-3 text-text">{{ text }}</p>
  </section>
</template>
