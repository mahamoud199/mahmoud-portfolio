import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { socialLinks } from '@/data/profile'

const schema = z.object({
  name: z.string().min(2, 'اكتب اسمك'),
  message: z.string().min(10, 'اكتب رسالة أطول')
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    // Demo only (no backend)
    toast('تم!', { description: 'دي رسالة تجريبية — اربطها بإيميل/باك-إند لاحقًا.' })
    reset()
    console.log(data)
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl">تواصل</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent>
            <div className="text-sm text-white/70">روابط السوشيال</div>
            <div className="mt-4 space-y-2 text-sm">
              <a className="block text-white/80 hover:text-white" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a className="block text-white/80 hover:text-white" href={socialLinks.x} target="_blank" rel="noreferrer">X</a>
              <a className="block text-white/80 hover:text-white" href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="block text-white/80 hover:text-white" href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="block text-white/80 hover:text-white" href={socialLinks.threads} target="_blank" rel="noreferrer">Threads</a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-xs text-white/70">الاسم</label>
                <input
                  {...register('name')}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="مثال: Ahmed"
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs text-white/70">الرسالة</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="اكتب رسالتك هنا..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>}
              </div>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                إرسال
              </Button>
              <p className="text-xs text-white/60">ملاحظة: هذا نموذج بدون باك-إند (Static).</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
