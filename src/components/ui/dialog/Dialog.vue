<template>
  <DialogRoot :modal="true" :onPointerDownOutside="handleOutsideClick">
    <slot />
  </DialogRoot>
</template>

<script lang="ts" setup>
import { DialogRoot } from 'radix-vue'
import { useForwardPropsEmits } from '@/lib/utils'

const forwarded = useForwardPropsEmits()

const handleOutsideClick = (event: Event) => {
  // 阻止点击遮罩关闭
  event.preventDefault()
}
</script> 