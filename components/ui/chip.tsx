import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chipVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border",
  {
    variants: {
      variant: {
        default:
          "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 hover:border-primary/50",
        secondary:
          "bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50",
        yellow:
          "bg-yellow-400/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-400/30 hover:border-yellow-400/50",
        amber:
          "bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 hover:border-amber-500/50",
        blue: "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50",
        cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50",
        emerald:
          "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 hover:border-emerald-500/50",
        outline:
          "bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  icon?: React.ReactNode
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(chipVariants({ variant, size }), className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
)

Chip.displayName = "Chip"

export { Chip, chipVariants }
