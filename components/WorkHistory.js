import { TbCalendar, TbMapPin, TbUser } from 'react-icons/tb'

export default function WorkHistory() {
  const jobs = [
    {
      name: 'CapTech Consulting',
      position: 'Sr. Consultant',
      dates: 'Feb 2020 – Present',
      location: 'Richmond, VA',
      description:
        'I worked as a front-end developer and consultant for a fortune 500 client and mentored new web devlopers.',
    },
    {
      name: 'Crutchfield',
      position: 'Sr. Front End Developer',
      dates: 'Feb 2014 – Feb. 2020',
      location: 'Charlottesville, VA',
      description:
        'As the senior front-end web developer it was my job to build the eCommerce web pages used by millions of customers.',
    },
    {
      name: 'Virginia Economic Development Partnership',
      position: 'Application Development Intern',
      dates: 'May 2014 – Aug. 2014',
      location: 'Richmond, VA',
      description:
        'As a VEDP intern it was my job to build tools and web pages to attract companies to do business to Virginia',
    },
  ]
  return (
    <>
      <div
        id="work"
        className="border-b border-neutral-200 py-5 dark:border-neutral-700"
      >
        <h2 className="text-3xl font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
          Work history
        </h2>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <li key={job.name} className="relative flex flex-col items-start">
            <h2 className="text-lg font-semibold  text-neutral-900 dark:text-neutral-100">
              {job.name}
            </h2>
            <p className="relative mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {job.description}
            </p>
            <p className="relative mt-4 flex items-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <TbUser className="h-4 w-4 flex-none" />
              <span className="ml-2">{job.position}</span>
            </p>
            <p className="relative mt-2 flex items-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <TbCalendar className="h-4 w-4 flex-none" />
              <span className="ml-2">{job.dates}</span>
            </p>
            <p className="relative mt-2 flex items-center text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <TbMapPin className="h-4 w-4 flex-none" />
              <span className="ml-2">{job.location}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
