import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <NextNProgress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        />
        <Component {...pageProps} />
      </>
  )
}
