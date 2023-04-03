import 'src/styles/globals.css'

//funcion por defecto que trae el framework Nextjs, seria el papá de todas las página.
export default function App({ Component, pageProps }) {

  
  return <Component {...pageProps} />
}
