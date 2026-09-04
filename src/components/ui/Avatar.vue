<script setup lang="ts">
import type { AvatarRef } from '@/types'

/*
 * `rounded` matches the two treatments in the design: field pills use a circle,
 * session participant stacks use a 4px squircle.
 */
withDefaults(
  defineProps<{
    person: AvatarRef
    size?: number
    rounded?: 'full' | 'squircle'
  }>(),
  { size: 20, rounded: 'squircle' },
)
</script>

<template>
  <span
    :class="[
      'relative block shrink-0 overflow-clip',
      rounded === 'full' ? 'rounded-full' : 'rounded-[4px]',
    ]"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :title="person.name"
  >
    <img
      v-if="person.src"
      :src="person.src"
      :alt="person.name"
      class="block size-full object-cover"
    />
    <span
      v-else
      class="flex size-full items-center justify-center text-1 font-medium text-white-to-dark"
      :class="person.tone === 'moss' ? 'bg-moss-solid' : 'bg-orange-solid'"
    >
      {{ person.initial }}
    </span>
  </span>
</template>
