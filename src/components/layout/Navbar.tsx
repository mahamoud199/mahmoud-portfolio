import { Link, useLocation } from 'wouter'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { socialLinks } from '@/data/profile'

export function Navbar() {
  const [loc] = useLocation()
  const isActive = (path: string) => (loc === path ? 'text-white' : 'text-white/70 hover:text-white')

  return (
    <header className="sticky top-0 z-50 -mx-4 mb-10 border-b border-white/10 bg-zinc-950/70 px-4 backdrop-blur">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <img
            src="/assets/logo.png"
            alt="Mahmoud M.S"
            className="h-8 w-8 rounded-2xl object-cover ring-1 ring-white/10"
            loading="eager"
          />
          <span>محمود محمد</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/" className={isActive('/')}>الرئيسية</Link>
          <Link href="/projects" className={isActive('/projects')}>المشاريع</Link>
          <Link href="/contact" className={isActive('/contact')}>تواصل</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a aria-label="X" className="hidden md:inline-flex" href={socialLinks.x} target="_blank" rel="noreferrer">
            <Button size="icon" variant="ghost"><Twitter className="h-4 w-4" /></Button>
          </a>
          <a aria-label="Instagram" className="hidden md:inline-flex" href={socialLinks.instagram} target="_blank" rel="noreferrer">
            <Button size="icon" variant="ghost"><Instagram className="h-4 w-4" /></Button>
          </a>
          <a aria-label="LinkedIn" className="hidden md:inline-flex" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Button size="icon" variant="ghost"><Linkedin className="h-4 w-4" /></Button>
          </a>
          <a aria-label="GitHub" className="hidden md:inline-flex" href={socialLinks.github} target="_blank" rel="noreferrer">
            <Button size="icon" variant="ghost"><Github className="h-4 w-4" /></Button>
          </a>
        </div>
      </div>
    </header>
  )
}
