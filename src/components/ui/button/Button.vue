<template>
  <button
    :class="[
      buttonVariants({ variant, size, class: className }),
      { 'pointer-events-none opacity-50': loading },
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Loader2Icon
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin"
    />
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { Loader2Icon } from 'lucide-vue-next'
import { buttonVariants } from './button.variants'
import type { ButtonProps } from './button.types'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<ButtonProps>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
  loading: false,
})
</script> 