<script setup lang="ts">
import { computed } from 'vue'

import add from '@/assets/icons/add.svg'
import chevronDown from '@/assets/icons/chevron-down.svg'
import chevronSmall from '@/assets/icons/chevron-small.svg'
import columnSettings from '@/assets/icons/column-settings.svg'
import dotsHorizontal from '@/assets/icons/dots-horizontal.svg'
import grid from '@/assets/icons/grid.svg'
import link from '@/assets/icons/link.svg'
import play from '@/assets/icons/play.svg'
import plus from '@/assets/icons/plus.svg'
import rowExpand from '@/assets/icons/row-expand.svg'
import xClose from '@/assets/icons/x-close.svg'
import type { IconName } from '@/types'

/*
 * Icons are the SVGs exported from Figma, served as images rather than inlined,
 * so the vectors and their baked-in stroke colours stay exactly as designed.
 */
const sources: Record<IconName, string> = {
  add,
  'chevron-down': chevronDown,
  'chevron-small': chevronSmall,
  'column-settings': columnSettings,
  'dots-horizontal': dotsHorizontal,
  grid,
  link,
  play,
  plus,
  'row-expand': rowExpand,
  'x-close': xClose,
}

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), {
  size: 16,
})

const boxStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}))
</script>

<template>
  <span class="block shrink-0 overflow-clip" :style="boxStyle">
    <img :src="sources[name]" alt="" class="block size-full" />
  </span>
</template>
