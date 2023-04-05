import 'src/styles/globals.css'

//función por defecto que trae el framework Nextjs, seria el papá de todas las página.
export default function App({ Component, pageProps }) {

  
  return <Component {...pageProps} />
}
