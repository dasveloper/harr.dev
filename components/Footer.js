import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="flex items-start justify-between">
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

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        &copy; {year} Justin Harr. All rights reserved.
      </p>
    </div>
  )
}
