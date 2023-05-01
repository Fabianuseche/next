import { Head, Html, Main, NextScript } from "next/document";

//función por defecto que trae el framework Nextjs, sirve para colocar la estructura HTML
//y colocar lo que se requiera en dicha estructura y que se muestre en todas las páginas
export default function Document() {
  return (
    <Html lang="es">
      <Head>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>


        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Charm&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
