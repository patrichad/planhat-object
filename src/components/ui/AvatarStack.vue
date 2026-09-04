<script setup lang="ts">
import Avatar from './Avatar.vue'
import type { AvatarRef } from '@/types'

defineProps<{ people: AvatarRef[] }>()
</script>

<template>
  <!-- 2px overlap between adjacent avatars, per the design. -->
  <span class="flex shrink-0 items-start">
    <Avatar
      v-for="(person, index) in people"
      :key="`${person.name}-${index}`"
      :person="person"
      :class="index < people.length - 1 ? '-mr-0.5' : ''"
    />
  </span>
</template>
