<template>
  <div
    :class="[
      cn(
        'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
        variantStyles[variant],
        className
      ),
    ]"
    role="alert"
    v-bind="$attrs"
  >
    <component :is="icon" v-if="icon" class="h-4 w-4" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { AlertTriangleIcon, InfoIcon, CheckCircle2Icon } from 'lucide-vue-next'

const variantStyles = {
  default: 'bg-background text-foreground',
  destructive:
    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
  success: 'border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600',
  info: 'border-blue-500/50 text-blue-600 dark:border-blue-500 [&>svg]:text-blue-600',
  warning: 'border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600',
}

interface AlertProps {
  variant?: keyof typeof variantStyles
  className?: string
  icon?: any
}

withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
  icon: undefined,
})
</script> 