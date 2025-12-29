import { profile } from '@/data/profile'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { useReveal } from '@/components/motion/useReveal'

export default function Home() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-sm text-white/70">{profile.location}</p>
            <h1 className="mt-2 font-display text-3xl leading-tight md:text-5xl">{profile.name}</h1>
            <p className="mt-3 max-w-2xl text-white/70">{profile.title}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.highlights.map((h) => (
                <span key={h} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Link href="/projects">
              <Button variant="primary">شوف المشاريع</Button>
            </Link>
            <Link href="/contact">
              <Button>تواصل</Button>
            </Link>
          </div>
        </div>

        {/* Photo / logo */}
        <div className="mt-10 flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="Mahmoud M.S"
            className="h-16 w-16 rounded-3xl object-cover ring-1 ring-white/10"
            loading="eager"
          />
          <div className="text-sm text-white/70">
            <div className="text-white">Mahmoud M.S</div>
            <div>Portfolio • IT & Networking</div>
          </div>
        </div>
      </section>

      <div ref={ref} />
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card>
          <CardContent>
            <div className="font-heading text-sm text-white/70">Networking</div>
            <div className="mt-2 font-display text-xl">CCNA Track</div>
            <p className="mt-2 text-sm text-white/70">VLAN • Routing • ACL • Subnetting</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-heading text-sm text-white/70">Mobile</div>
            <div className="mt-2 font-display text-xl">Flutter Apps</div>
            <p className="mt-2 text-sm text-white/70">School System • Reports • Dark Mode</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="font-heading text-sm text-white/70">Web</div>
            <div className="mt-2 font-display text-xl">Full-Stack Projects</div>
            <p className="mt-2 text-sm text-white/70">Booking • E-commerce • Dashboards</p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
