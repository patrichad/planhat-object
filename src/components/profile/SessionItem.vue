<script setup lang="ts">
import AvatarStack from '@/components/ui/AvatarStack.vue'
import type { Session } from '@/types'

defineProps<{ session: Session; isLast?: boolean }>()
</script>

<template>
  <li class="flex w-full items-start gap-3">
    <!--
      Timeline rail. The connector is 44px on a 36px row so it reaches the next
      dot; the last one stops 2px past its dot instead of trailing off.
    -->
    <div class="relative h-9 w-3 shrink-0">
      <span
        class="absolute top-4 left-[5.5px] w-px bg-line"
        :class="isLast ? 'h-2' : 'h-11'"
        aria-hidden="true"
      />
      <span
        class="absolute top-3.5 left-0.5 size-2 rounded-full border-hairline border-[rgba(222,222,253,0.23)] bg-bg-solid"
        aria-hidden="true"
      />
    </div>

    <button
      type="button"
      class="flex min-h-6 min-w-0 flex-1 cursor-pointer items-center gap-2.5 self-stretch rounded-[6px] p-2 text-left transition-colors duration-75 hover:bg-bg-soft active:bg-line focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base"
    >
      <!--
        Title sizes to its content up to half the text track; the preview takes
        whatever is left and clips. That is why short titles don't leave a
        240px hole before the preview the way two equal columns would.
      -->
      <span class="flex min-w-0 flex-1 items-center gap-2.5 overflow-clip">
        <span
          class="max-w-1/2 shrink-0 overflow-hidden text-3 font-medium whitespace-nowrap text-gray-12"
          >{{ session.title }}</span
        >
        <span class="min-w-0 flex-1 overflow-hidden text-2 whitespace-nowrap text-gray-solid-10">{{
          session.subtitle
        }}</span>
      </span>

      <AvatarStack :people="session.participants" />

      <span class="flex w-20 shrink-0 flex-col items-end">
        <span class="text-2 whitespace-nowrap text-gray-solid-10">{{ session.timeAgo }}</span>
      </span>
    </button>
  </li>
</template>
