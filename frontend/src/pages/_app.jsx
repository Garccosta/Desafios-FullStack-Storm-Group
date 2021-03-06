// Todos os elementos que se repetem em todas as paginas do app são colocados aqui

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

