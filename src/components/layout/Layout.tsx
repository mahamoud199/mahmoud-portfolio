import { Navbar } from './Navbar'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <Navbar />
        <main className="pb-20">{children}</main>
      </div>
      <footer className="border-t border-white/10 py-8 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Mahmoud Mohammed
      </footer>
    </div>
  )
}
