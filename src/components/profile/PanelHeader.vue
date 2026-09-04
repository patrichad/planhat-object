<script setup lang="ts">
import IconButton from '@/components/ui/IconButton.vue'

defineProps<{ breadcrumb: string }>()
</script>

<template>
  <header class="flex h-10 shrink-0 items-center justify-between">
    <p class="truncate text-3 font-medium text-text">{{ breadcrumb }}</p>

    <div class="flex shrink-0 items-center gap-2">
      <IconButton icon="plus" label="Add" />
      <IconButton icon="dots-horizontal" label="More options" />
      <IconButton icon="x-close" label="Close" />
    </div>
  </header>
</template>
