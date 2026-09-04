<script setup lang="ts">
import Avatar from './Avatar.vue'
import Tag from './Tag.vue'
import type { Field } from '@/types'

/*
 * The design system's two-part pill: a label segment, a hairline separator and
 * a value segment. Both halves are 28px tall with 8px of horizontal padding,
 * and the shell clips so the separator meets the rounded border cleanly.
 *
 * Rendered as a button because these pills are the edit affordance for a field;
 * `readOnly` is the treatment for fields the design marks with a lock.
 */
defineProps<{ field: Field; readOnly?: boolean }>()
</script>

<template>
  <component
    :is="readOnly ? 'div' : 'button'"
    :type="readOnly ? undefined : 'button'"
    :aria-disabled="readOnly || undefined"
    :class="[
      'flex h-7 shrink-0 items-center overflow-clip rounded-md border-hairline border-line text-left transition-colors duration-75',
      readOnly
        ? 'cursor-default bg-bg-soft'
        : 'cursor-pointer hover:border-bg-solid active:bg-bg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base',
    ]"
  >
    <span
      class="flex h-full items-center px-2 text-2 font-medium whitespace-nowrap text-text-subtle"
    >
      {{ field.label }}
    </span>

    <span class="h-full w-[0.5px] shrink-0 bg-line" aria-hidden="true" />

    <span class="flex h-full items-center gap-1 px-2 text-2 whitespace-nowrap text-text-contrast">
      <template v-if="field.value.kind === 'text'">{{ field.value.text }}</template>

      <template v-else-if="field.value.kind === 'person'">
        <Avatar :person="field.value.person" :size="16" rounded="full" />
        {{ field.value.person.name }}
      </template>

      <template v-else>
        <Tag v-for="tag in field.value.tags" :key="tag">{{ tag }}</Tag>
      </template>
    </span>
  </component>
</template>
