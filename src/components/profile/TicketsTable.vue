<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'
import type { Ticket } from '@/types'

/*
 * The table is authored at its full 1050px (40 / 280 / 420 / 160 / 150) and the
 * panel clips it, so the trailing columns are cut off exactly as in the design.
 * The viewport is capped at header + five rows = 240px.
 */
defineProps<{ tickets: Ticket[] }>()
</script>

<template>
  <div class="h-60 w-full overflow-clip">
    <table class="w-[1050px] table-fixed border-separate border-spacing-0 text-left">
      <colgroup>
        <col class="w-10" />
        <col class="w-[280px]" />
        <col class="w-[420px]" />
        <col class="w-40" />
        <col class="w-[150px]" />
      </colgroup>

      <thead>
        <tr class="h-10">
          <th class="border-b-hairline border-line" />
          <th class="border-b-hairline border-line px-3 text-3 font-medium text-gray-12">Title</th>
          <th class="border-b-hairline border-line px-3 text-3 font-medium text-gray-12">
            Description
          </th>
          <th class="border-b-hairline border-line px-3 text-3 font-medium whitespace-nowrap text-gray-12">
            Combined ARR (USD)
          </th>
          <th class="border-b-hairline border-line px-3">
            <button
              type="button"
              aria-label="Table settings"
              class="flex size-6 items-center justify-center rounded-md transition-colors duration-75 hover:bg-bg-soft active:bg-line focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base"
            >
              <AppIcon name="column-settings" :size="14" />
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="ticket in tickets"
          :key="ticket.id"
          class="h-10 transition-colors duration-75 hover:bg-bg-soft"
        >
          <td class="border-r-hairline border-b-hairline border-line">
            <div class="flex items-center justify-center">
              <button
                type="button"
                :aria-label="`Expand ${ticket.title}`"
                class="flex size-6 items-center justify-center rounded-md transition-colors duration-75 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base"
              >
                <AppIcon name="row-expand" :size="14" />
              </button>
            </div>
          </td>

          <td class="overflow-clip border-r-hairline border-b-hairline border-line pl-1">
            <a
              href="#"
              class="block truncate rounded-[6px] px-2 py-1 text-3 text-gray-12 transition-colors duration-75 hover:bg-bg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-base"
            >
              {{ ticket.title }}
            </a>
          </td>

          <td class="overflow-clip border-r-hairline border-b-hairline border-line px-3">
            <p class="truncate text-3 text-gray-12">{{ ticket.description }}</p>
          </td>

          <td class="border-r-hairline border-b-hairline border-line px-3">
            <span class="text-3 text-gray-solid-10">{{ ticket.combinedArr }}</span>
          </td>

          <td class="border-b-hairline border-line" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
