<template>
  <div :class="[cn('flex flex-col space-y-1.5 p-6', className)]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface CardHeaderProps {
  className?: string
}

defineProps<CardHeaderProps>()
</script> 