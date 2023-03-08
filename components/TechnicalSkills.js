import {
  SiAstro,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si'

const skills = [
  {
    name: 'HTML',
    logo: SiHtml5,
    color: '#E34F26',
  },
  {
    name: 'CSS',
    logo: SiCss3,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    logo: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'React',
    logo: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    color: '#000000',
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
    color: '#339933',
  },
  {
    name: 'Vue.js',
    logo: SiVuedotjs,
    color: '#4FC08D',
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'SASS',
    logo: SiSass,
    color: '#CC6699',
  },
  {
    name: 'Astro',
    logo: SiAstro,
    color: '#FF5D01',
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'PostgreSQL',
    logo: SiPostgresql,
    color: '#4169E1',
  },
]

export default function TechnicalSkills() {
  return (
    <>
      <div
        id="skills"
        className="border-b border-neutral-200 py-5 dark:border-neutral-700"
      >
        <h2 className="text-3xl font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
          Technical skills
        </h2>
      </div>
      <div className="-mx-6 mt-8 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:grid-cols-3 sm:rounded-2xl lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-2 bg-neutral-50 p-8 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            <skill.logo className="h-12 w-12" color={skill.color} />
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center font-medium text-neutral-600 dark:text-neutral-400">
        ...and much more!
      </p>
    </>
  )
}
