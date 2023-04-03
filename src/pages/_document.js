import { Html, Head, Main, NextScript } from 'next/document'


//funcion por defecto que trae el framework Nextjs, sirve para colocar la extructura HTML
//y colocar lo que se requiera en dicha estructura y que se muestre en todas las páginas
export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
