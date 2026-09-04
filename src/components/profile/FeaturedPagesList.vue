<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'
import type { FeaturedPage } from '@/types'

defineProps<{ pages: FeaturedPage[] }>()
</script>

<template>
  <ul class="flex w-full flex-col">
    <li v-for="page in pages" :key="page.id" class="w-full shrink-0">
      <button
        type="button"
        class="flex h-[41px] w-full items-center overflow-clip border-b-hairline border-line text-left transition-colors duration-75 hover:bg-bg-soft active:bg-line focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green-base"
      >
        <span class="flex w-[334px] shrink-0 items-center gap-3 px-2">
          <span class="flex size-6 shrink-0 items-center justify-center rounded-[6px]">
            <AppIcon name="grid" />
          </span>
          <span class="truncate text-3 font-medium text-gray-12">{{ page.name }}</span>
        </span>

        <span class="flex w-[111px] shrink-0 items-center px-2">
          <span class="truncate text-3 font-medium text-gray-12">{{ page.type }}</span>
        </span>

        <span class="flex w-[148px] shrink-0 items-center px-2">
          <span class="text-3 whitespace-nowrap text-gray-solid-11">{{ page.visibility }}</span>
        </span>

        <span class="flex w-[148px] shrink-0 items-center px-2">
          <span class="truncate text-3 text-gray-solid-11">{{ page.updatedAgo }}</span>
        </span>
      </button>
    </li>
  </ul>
</template>
