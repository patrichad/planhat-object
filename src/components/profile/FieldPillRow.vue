<script setup lang="ts">
import FieldPill from '@/components/ui/FieldPill.vue'
import type { Field } from '@/types'

defineProps<{ fields: Field[] }>()
</script>

<template>
  <div class="flex shrink-0 items-center gap-2">
    <FieldPill v-for="field in fields" :key="field.label" :field="field" />
  </div>
</template>
