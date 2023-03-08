import { TbMail } from 'react-icons/tb'

export default function Contact() {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2"
    >
      <div>
        <h2 className="text-3xl font-semibold leading-6 text-neutral-900 dark:text-neutral-100">
          Get in touch
        </h2>
        <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci
          molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
          sed malesuada et magna.
        </p>
        <a
          href="mailto:j@harr.dev"
          className="relative mt-6 flex items-center text-base leading-7 text-neutral-600 hover:text-indigo-600 dark:text-neutral-400"
        >
          <TbMail className="h-5 w-5 flex-none" />
          <b className="ml-1">Email:</b>
          <span className="ml-2">j@harr.dev</span>
        </a>
      </div>
      <form action="https://formspree.io/f/xayzjadz" method="POST">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="flex flex-col space-y-6 ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6  text-neutral-900 dark:text-neutral-100"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border border-neutral-200 bg-neutral-50 py-2 px-3.5 text-neutral-900 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6  text-neutral-900 dark:text-neutral-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-neutral-200 bg-neutral-50 py-2 px-3.5 text-neutral-900 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6  text-neutral-900 dark:text-neutral-100"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border border-neutral-200 bg-neutral-50 py-2 px-3.5 text-neutral-900 outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 sm:text-sm sm:leading-6"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
