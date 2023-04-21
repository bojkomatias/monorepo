'use client'

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui'

export function Tool() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>
            <span>Hover me!</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Hello! Im a Radix UI Tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
