'use client'

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-brand-700 outline-brand-700 m-10 rounded-lg px-4 py-2 text-white outline-2 outline-offset-2 focus:outline">
      {children}
    </button>
  )
}
