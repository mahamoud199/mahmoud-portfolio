import { projects } from '@/data/projects'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function ProjectImages({ imgs }: { imgs: { src: string; alt: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {imgs.map((img) => (
        <Dialog key={img.src}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left outline-none transition hover:border-white/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
                onError={() => {
                  // fallback: keep layout stable
                }}
              />
              <div className="px-4 pb-4 pt-3">
                <p className="text-xs text-white/70">{img.alt}</p>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="p-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img src={img.src} alt={img.alt} className="max-h-[80vh] w-full object-contain" />
            </div>
            <div className="px-2 pt-3">
              <p className="text-sm text-white/80">{img.alt}</p>
              <p className="mt-1 text-xs text-white/55">
                ملاحظة: استبدل الصور placeholders بصورك الحقيقية داخل <span className="font-mono">public/assets/projects</span>.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}


export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl">المشاريع</h1>
          <p className="mt-2 text-sm text-white/70">Networking + Mobile + Web</p>
        </div>
        <button
          className="text-xs text-white/70 underline underline-offset-4 hover:text-white"
          onClick={() => toast('تم نسخ رابط المشاريع (مثال).', { description: 'تقدر تعدلها لاحقًا.' })}
        >
          Share
        </button>
      </div>

      <div className="grid gap-6">
        {projects.map((p) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs text-white/70">{p.category}</div>
                    <div className="mt-1 font-display text-xl">{p.title}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-sm leading-7 text-white/80">{p.descriptionAr}</p>
                    <p className="text-xs leading-6 text-white/60">{p.descriptionEn}</p>
                  </div>
                  <ProjectImages imgs={p.images} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <div className="font-heading text-white">ملاحظة</div>
        <p className="mt-2">
          استبدل الصور داخل <span className="font-mono">src/assets/projects</span> بنفس الأسماء عشان تظهر تلقائيًا.
        </p>
      </div>
    </div>
  )
}
