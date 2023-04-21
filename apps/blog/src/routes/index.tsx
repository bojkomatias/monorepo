import { component$ } from '@builder.io/qwik'
import { DocumentHead, Link } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <div class={'min-h-screen bg-gray-100 p-20'}>
        <div>
          Hi there! This is a Qwik project on a Monorepo, Tailwind and Radix UI
        </div>
        <br />
        <Link href="/react/" class={'text-brand-700 hover:underline'}>
          Click here to see React/Radix integration!
        </Link>
      </div>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
