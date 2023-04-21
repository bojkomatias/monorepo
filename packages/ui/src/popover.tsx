'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from 'tailwind/utils'

const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps> =
  TooltipPrimitive.Provider

const Tooltip: React.FC<TooltipPrimitive.TooltipProps> = TooltipPrimitive.Root

const TooltipTrigger: React.ForwardRefExoticComponent<
  TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>
> = TooltipPrimitive.Trigger

const TooltipContent: React.ForwardRefExoticComponent<
  Omit<
    TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>,
    'ref'
  > &
    React.RefAttributes<HTMLDivElement>
> = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'bg-popover text-popover-foreground animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md',
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
