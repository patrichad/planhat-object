<script setup lang="ts">
import AvatarStack from '@/components/ui/AvatarStack.vue'
import type { Session } from '@/types'

defineProps<{ session: Session }>()
</script>

<template>
  <li class="flex w-full items-start gap-3">
    <!--
      Timeline rail. The connector is 44px on a 36px row, so it runs under the
      following item; on the last row the section's clip cuts it off.
    -->
    <div class="relative h-9 w-3 shrink-0">
      <span class="absolute top-4 left-[5.5px] h-11 w-px bg-line" aria-hidden="true" />
      <span
        class="absolute top-3.5 left-0.5 size-2 rounded-full border-hairline border-[rgba(222,222,253,0.23)] bg-bg-solid"
        aria-hidden="true"
      />
    </div>

    <button
      type="button"
      class="flex min-h-6 flex-1 cursor-pointer items-center gap-2.5 self-stretch rounded-[6px] p-2 text-left transition-colors duration-75 hover:bg-bg-soft active:bg-line focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base"
    >
      <!-- `whitespace-pre` keeps the double space inside "Demo for the  Admins". -->
      <span class="flex min-w-0 max-w-60 flex-1 flex-col items-start overflow-clip">
        <span
          class="w-full overflow-hidden text-3 font-medium overflow-ellipsis whitespace-pre text-gray-12"
          >{{ session.title }}</span
        >
      </span>

      <span class="flex min-w-0 flex-1 flex-col items-start overflow-clip">
        <span class="w-full truncate text-2 text-gray-solid-10">{{ session.subtitle }}</span>
      </span>

      <AvatarStack :people="session.participants" />

      <span class="flex w-20 shrink-0 flex-col items-end">
        <span class="text-2 whitespace-nowrap text-gray-solid-10">{{ session.timeAgo }}</span>
      </span>
    </button>
  </li>
</template>
