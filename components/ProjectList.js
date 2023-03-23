import Image from 'next/image'
import { TbBrandGithub, TbLink } from 'react-icons/tb'

const projects = [
  {
    name: 'Flagpoll',
    website: 'https://flagpoll.vercel.app',
    github: 'https://github.com/dasveloper/flagpoll/settings',
    description:
      'A feature flag service that allows you to quickly and easily setup feature flags to turn features on and off without redploys.',
    logo: '/logos/flagpoll.png',
    tech: [
      'T3',
      'Next.js',
      'React',
      'Typescript',
      'TRPC',
      'Prisma',
      'Tailwind',
      'Planetscale',
      'NextAuth.js',
      'Vercel',
    ],
  },
  {
    name: 'Jamform',
    website: 'https://jamform.com',
    github: null,
    description:
      'Form-backend SAAS to collect form submission without needing to setup a serve or database.',
    logo: '/logos/jamform.png',
    tech: [
      'Next.js',
      'React',
      'Tailwind',
      'Stripe',
      'MongoDB',
      'Passport',
      'Vercel',
    ],
  },
  {
    name: 'Menustash',
    website: 'https://menustash.com',
    github: null,
    description:
      'A simple, affordable, SAAS for hosting restauraunt menus with built in QR code support and analytics.',
    logo: '/logos/menustash.png',
    tech: [
      'Next.js',
      'React',
      'Mantine',
      'Stripe',
      'MongoDB',
      'Clerk',
      'AWS S3',
      'Vercel',
    ],
  },
  {
    name: "World's Best Mug",
    website: 'https://worldsbestmug.com',
    github: null,
    description:
      "eCommerce store that sells custom World's Best mugs from World's Best Boss to World's Best Bull Fighter.",
    logo: '/logos/worldsbestmug.png',
    tech: ['Next.js', 'React', 'Mantine', 'Sharp', 'Snipcart', 'Vercel'],
  },
  {
    name: 'Resbin',
    website: 'https://resbin.com',
    github: 'https://github.com/dasveloper/ResBin',
    description:
      'Mock API service to build out placeholder API responses while developing your frontend.',
    logo: '/logos/resbin.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Upstash Redis', 'Vercel'],
  },
  {
    name: 'Colorwaze',
    website: 'https://colorwaze.com',
    github: 'https://github.com/dasveloper/colorwaze',
    description:
      "Explore over 4.2 billion colors with details on it's name, variants, accessibility, and more.",
    logo: '/logos/colorwaze.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Next-Auth', 'Vercel'],
  },
  {
    name: 'Hitcount',
    website: 'https://hitcount.app',
    github: null,
    description:
      'A modern take on old school hitcounters, using dynamically generated images to display your number of visitors.',
    logo: '/logos/hitcountapp.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Upstash Redis', 'Vercel'],
  },
  {
    name: 'Tailcolor',
    website: 'https://tailcolor.com',
    github: 'https://github.com/dasveloper/tailcolor',
    description:
      'Generate full Tailwind CSS color palettes from a single color.',
    logo: '/logos/tailcolor.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Upstash Redis', 'Vercel'],
  },
  {
    name: 'Timerpage',
    website: 'https://timerpage.com',
    github: 'https://github.com/dasveloper/TimerPage',
    description:
      'Simple, sharable, countdown timers of any duration from 1 second to 1000+ days.',
    logo: '/logos/timerpage.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
  },
  {
    name: 'Hyclass',
    website: 'https://npmjs.com/package/hyclass',
    github: 'https://github.com/dasveloper/hyclass',
    description: 'A tiny (162b gzip) utility for hydrating className strings.',
    logo: '/logos/npm.png',
    tech: ['Javascript', 'npm'],
  },
  {
    name: 'Scrambly',
    website: 'https://scrambly.vercel.app',
    github: 'https://github.com/dasveloper',
    description:
      'A tool that lets you hide images by scrambling and unscramblong the pixels using a password.',
    logo: '/logos/scrambly.png',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
  },
  {
    name: 'Swatchy',
    website: null,
    github: 'https://github.com/dasveloper/swatchy',
    description:
      'A Chrome extension that lets you save and access colors in your browser and copy/paste their hex and RGB values.',
    logo: '/logos/swatchy.png',
    tech: ['React', 'Mantine', 'Chrome'],
  },
]

export default function ProjectList() {
  return (
    <>
      <div
        id="projects"
        className="border-b border-neutral-200 py-5 dark:border-neutral-700"
      >
        <h2 className="text-3xl font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
          Projects
        </h2>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.name} className="relative flex flex-col items-start">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border  border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                className="h-8 w-8 object-contain"
                src={project.logo}
                alt={`${project.name} logo`}
                width="100"
                height="100"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold  text-neutral-900 dark:text-neutral-100">
              <a href={project.website}>{project.name}</a>
            </h2>
            <p className="relative mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech?.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-[10px] font-medium uppercase text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                className="relative mt-4 flex items-center text-xs font-medium text-neutral-600 hover:text-indigo-600 dark:text-neutral-400"
                rel="noreferrer"
              >
                <TbLink className="h-4 w-4 flex-none" />
                <span className="ml-2">{project.website}</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="relative mt-2 flex items-center text-xs font-medium text-neutral-600 hover:text-indigo-600 dark:text-neutral-400"
                rel="noreferrer"
              >
                <TbBrandGithub className="h-4 w-4 flex-none" />
                <span className="ml-2">View code</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
