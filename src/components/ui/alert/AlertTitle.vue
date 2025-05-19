<template>
  <h5
    :class="[
      cn('mb-1 font-medium leading-none tracking-tight', className),
    ]"
  >
    <slot />
  </h5>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface AlertTitleProps {
  className?: string
}

defineProps<AlertTitleProps>()
</script> 