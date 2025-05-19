<template>
  <h3
    :class="[
      cn('text-2xl font-semibold leading-none tracking-tight', className),
    ]"
  >
    <slot />
  </h3>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface CardTitleProps {
  className?: string
}

defineProps<CardTitleProps>()
</script> 