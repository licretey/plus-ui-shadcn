import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './button.variants'

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string
  disabled?: boolean
  loading?: boolean
} 