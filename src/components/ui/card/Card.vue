<template>
  <div
    :class="[
      cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      ),
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
}

defineProps<CardProps>()
</script> 