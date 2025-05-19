<template>
  <div
    :class="[
      cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      ),
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface AvatarProps {
  className?: string
}

defineProps<AvatarProps>()
</script> 