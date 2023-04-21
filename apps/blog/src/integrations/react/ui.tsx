/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react'
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui'

export const UIButton = qwikify$(
  () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button>Hover me!</Button>
        </TooltipTrigger>
        <TooltipContent>
          Hi there, im a Radix-UI Tooltip qwikified :$
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  { eagerness: 'hover' }
)
