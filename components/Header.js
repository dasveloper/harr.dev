import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { TbDownload, TbMoon, TbSun } from 'react-icons/tb'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="flex items-start justify-center sm:justify-between">
        <nav className="flex items-start space-x-8">
          <Link
            href="#projects"
            className="text-sm font-semibold leading-6 text-neutral-900 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-600"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-sm font-semibold leading-6 text-neutral-900 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-600"
          >
            Skills
          </Link>
          <Link
            href="#work"
            className="text-sm font-semibold leading-6 text-neutral-900 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-600"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-neutral-900 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-600"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle dark mode"
          className="group hidden rounded-full border border-neutral-200 bg-neutral-50 p-2 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700  sm:block"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <TbSun className="hidden h-4 w-4 fill-amber-400 stroke-amber-400 dark:block" />
          <TbMoon className="h-4 w-4 fill-amber-400 stroke-amber-400 dark:hidden" />
        </button>
      </div>
      <div className="mt-8 text-center">
        <Image
          className="mx-auto h-24 w-24 rounded-full border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
          src="/avatar.png"
          alt="Justin's Avatar"
          width="200"
          height="200"
        />
        <h1 className="mt-5 text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Hello!
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          I&apos;m <b>Justin Harr</b>, a web developer and consultant. I&apos;ve
          been building websites for almost 10 years, both for fun and
          professionally.
        </p>

        <a
          download
          href="resume.pdf"
          className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-neutral-900 py-2.5 px-4 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          <TbDownload className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Download CV
        </a>
      </div>
    </>
  )
}
