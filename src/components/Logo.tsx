import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  lockup?: 'icon-only' | 'horizontal' | 'stacked'
  salonName?: string
}

export function Logo({ 
  className, 
  size = 'md', 
  variant = 'dark', 
  lockup = 'horizontal',
  salonName = 'The Modern Salon'
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-24'
  }

  const textColor = variant === 'dark' ? 'text-charcoal' : 'text-ivory'
  const accentColor = 'text-rosegold'

  const Icon = () => (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto", sizeClasses[size], accentColor)}
    >
      <path 
        d="M20,80 C30,40 50,20 80,10 C75,40 60,70 20,80 Z" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M30,50 L40,65 M45,40 L55,55 M60,30 L70,45" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
    </svg>
  )

  if (lockup === 'icon-only') {
    return (
      <div className={cn("flex items-center", className)}>
        <Icon />
      </div>
    )
  }

  return (
    <div className={cn(
      "flex items-center gap-3", 
      lockup === 'stacked' && "flex-col text-center",
      className
    )}>
      <Icon />
      <div className={cn("flex flex-col", lockup === 'stacked' && "items-center")}>
        <span className={cn(
          "font-serif font-bold tracking-tight leading-none",
          textColor,
          size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-4xl' : 'text-2xl'
        )}>
          {salonName}
        </span>
        <span className={cn(
          "font-sans uppercase tracking-widest leading-none mt-1",
          textColor,
          "opacity-70",
          size === 'sm' ? 'text-[0.5rem]' : size === 'lg' ? 'text-xs' : 'text-[0.6rem]'
        )}>
          Beauty & Wellness
        </span>
      </div>
    </div>
  )
}
