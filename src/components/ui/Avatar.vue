<script setup lang="ts">
import { computed } from 'vue'

import type { AvatarRef, AvatarTone } from '@/types'

/*
 * `rounded` matches the two treatments in the design: field pills use a circle,
 * session participant stacks use a 4px squircle.
 */
const props = withDefaults(
  defineProps<{
    person: AvatarRef
    size?: number
    rounded?: 'full' | 'squircle'
  }>(),
  { size: 20, rounded: 'squircle' },
)

const toneClasses: Record<AvatarTone, string> = {
  orange: 'bg-orange-solid',
  moss: 'bg-moss-solid',
  indigo: 'bg-indigo-solid',
  plum: 'bg-plum-solid',
  ruby: 'bg-ruby-solid',
  bronze: 'bg-bronze-solid',
}

const tones = Object.keys(toneClasses) as AvatarTone[]

/*
 * Photo-less avatars pick their colour from the name rather than at random, so
 * the same person is always the same colour across sessions and renders.
 */
function toneFor(name: string): AvatarTone {
  let hash = 0
  for (const char of name) {
    hash = (hash * 31 + char.codePointAt(0)!) % 1_000_003
  }
  return tones[hash % tones.length]
}

const letter = computed(
  () => props.person.initial ?? props.person.name.trim().charAt(0).toUpperCase(),
)
const fill = computed(() => toneClasses[props.person.tone ?? toneFor(props.person.name)])
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
      :class="fill"
    >
      {{ letter }}
    </span>
  </span>
</template>
