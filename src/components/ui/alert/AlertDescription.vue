<template>
  <div
    :class="[
      cn('text-sm [&_p]:leading-relaxed', className),
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface AlertDescriptionProps {
  className?: string
}

defineProps<AlertDescriptionProps>()
</script> 