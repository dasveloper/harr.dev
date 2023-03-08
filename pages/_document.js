import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex h-full flex-col bg-white antialiased dark:bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
