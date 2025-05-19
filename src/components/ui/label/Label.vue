<template>
  <label
    :class="[
      cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      ),
    ]"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

interface LabelProps {
  className?: string
}

defineProps<LabelProps>()
</script> 