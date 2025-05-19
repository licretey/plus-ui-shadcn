<template>
  <div
    :class="[
      cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      ),
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface AvatarFallbackProps {
  className?: string
}

defineProps<AvatarFallbackProps>()
</script> 