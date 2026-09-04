<script setup lang="ts">
import DescriptionBlock from './profile/DescriptionBlock.vue'
import FeaturedPagesList from './profile/FeaturedPagesList.vue'
import FieldPillRow from './profile/FieldPillRow.vue'
import ObjectHeader from './profile/ObjectHeader.vue'
import PanelHeader from './profile/PanelHeader.vue'
import SectionHead from './profile/SectionHead.vue'
import SessionList from './profile/SessionList.vue'
import TicketsTable from './profile/TicketsTable.vue'
import IconButton from './ui/IconButton.vue'
import type { ObjectProfile } from '@/types'

defineProps<{ profile: ObjectProfile }>()
</script>

<template>
  <!-- 710px slideout: 16px gutters, 24px between top-level blocks. -->
  <div class="flex w-[710px] flex-col gap-6 bg-page-background px-4">
    <PanelHeader :breadcrumb="profile.breadcrumb" />

    <!-- Fixed 194px in the design, 2px taller than its own content. -->
    <div class="flex min-h-[194px] shrink-0 flex-col gap-6">
      <ObjectHeader :name="profile.name" :health-score="profile.healthScore" />
      <FieldPillRow :fields="profile.fields" />
      <DescriptionBlock :text="profile.description" />
    </div>

    <!-- Clipped at 178px, which cuts the connector trailing the last session. -->
    <section class="flex h-[178px] shrink-0 flex-col gap-1.5 overflow-clip">
      <SectionHead title="Sessions">
        <template #actions>
          <IconButton icon="add" label="New session" :size="24" />
        </template>
      </SectionHead>
      <SessionList :sessions="profile.sessions" />
    </section>

    <section class="flex shrink-0 flex-col gap-1">
      <SectionHead title="Featured Pages" />
      <FeaturedPagesList :pages="profile.featuredPages" />
    </section>

    <section class="flex shrink-0 flex-col gap-1.5">
      <SectionHead title="Tickets">
        <template #actions>
          <IconButton icon="link" label="Link ticket" :size="24" />
          <IconButton icon="add" label="New ticket" :size="24" />
        </template>
      </SectionHead>
      <TicketsTable :tickets="profile.tickets" />
    </section>
  </div>
</template>
