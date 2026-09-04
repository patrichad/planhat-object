<script setup lang="ts">
import SessionItem from './SessionItem.vue'
import type { Session } from '@/types'

defineProps<{ sessions: Session[] }>()
</script>

<template>
  <ul class="flex w-full flex-col">
    <SessionItem v-for="session in sessions" :key="session.id" :session="session" />
  </ul>
</template>
