import type { AppProps } from 'next/app'
import '../styles/globals.css'
import localFont from 'next/font/local'

const oxygen = localFont({
  src: [
    {
      path: './fonts/Oxygen-Light.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Oxygen-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Oxygen-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={oxygen.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
