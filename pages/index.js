// import { Inter } from 'next/font/google'
import Head from 'next/head'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProjectList from '@/components/ProjectList'
import TechnicalSkills from '@/components/TechnicalSkills'
import WorkHistory from '@/components/WorkHistory'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Harr&apos;s Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Justin Harr, a web developer and consultant. I build websites for fun and for a living."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Header />
          <div className="my-8" />
          <ProjectList />
          <div className="my-20" />
          <WorkHistory />
          <div className="my-20" />
          <TechnicalSkills />
          <div className="my-20" />
          <Contact />
          <div className="my-20" />
          <Footer />
        </div>
      </main>
    </>
  )
}
