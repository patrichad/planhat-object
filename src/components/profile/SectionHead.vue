<script setup lang="ts">
import { useSlots } from 'vue'

import IconButton from '@/components/ui/IconButton.vue'

/*
 * Section heading: a collapse control that reads as one target (label plus
 * chevron), followed by whatever section-level actions the caller passes.
 * Heads with 24px action buttons are 28px tall; a bare head is 24px.
 */
defineProps<{ title: string; expanded?: boolean }>()

const hasActions = Boolean(useSlots().actions)
</script>

<template>
  <div class="flex shrink-0 items-center gap-2" :class="hasActions ? 'min-h-7' : 'h-6'">
    <div class="flex h-6 items-center gap-1 overflow-clip">
      <h2 class="text-3 font-medium whitespace-nowrap text-text-subtle">{{ title }}</h2>
      <IconButton
        icon="chevron-small"
        :label="`${expanded === false ? 'Expand' : 'Collapse'} ${title}`"
      />
    </div>
    <slot name="actions" />
  </div>
</template>
