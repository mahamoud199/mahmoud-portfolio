import { Route, Switch } from 'wouter'
import { Toaster } from 'sonner'
import { Layout } from '@/components/layout/Layout'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { CustomCursor } from '@/components/motion/CustomCursor'
import React, { Suspense } from 'react'

const Home = React.lazy(() => import('@/pages/Home'))
const Projects = React.lazy(() => import('@/pages/Projects'))
const Contact = React.lazy(() => import('@/pages/Contact'))

export function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Toaster richColors position="top-center" />
      <Layout>
        <Suspense fallback={<div className="p-6 text-sm opacity-70">Loading…</div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route>
              <div className="p-6">Page not found.</div>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  )
}
