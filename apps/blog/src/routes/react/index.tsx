import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { UIButton } from '@/integrations/react/ui'

export default component$(() => {
  return (
    <div class={'mx-auto mt-24 w-fit'}>
      <UIButton />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Qwik React',
}
