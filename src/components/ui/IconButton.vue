<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import type { IconName } from '@/types'

/*
 * Two sizes appear in the design: a 20px button holding a 12px glyph (panel
 * chrome, accordion chevrons) and a 24px button holding a 16px glyph (section
 * actions). `size` names the button box; the glyph follows from it.
 */
withDefaults(
  defineProps<{
    icon: IconName
    label: string
    size?: 20 | 24
  }>(),
  { size: 20 },
)
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    :class="[
      'flex cursor-pointer items-center justify-center rounded-md text-transparent',
      'transition-colors duration-75',
      'hover:bg-bg-soft active:bg-line',
      'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base',
      size === 20 ? 'size-5' : 'size-6',
    ]"
  >
    <AppIcon :name="icon" :size="size === 20 ? 12 : 16" />
  </button>
</template>
