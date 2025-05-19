<template>
  <img
    :class="[cn('aspect-square h-full w-full', className)]"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

interface AvatarImageProps {
  className?: string
}

defineProps<AvatarImageProps>()
</script> 