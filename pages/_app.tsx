import '../styles/tailwind.css'

import '@fontsource/eb-garamond'
import '@fontsource/oswald'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
