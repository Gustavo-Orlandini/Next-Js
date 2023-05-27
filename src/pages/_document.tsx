import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Documents() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href="https://fonts.googleapis.com" />
                <link rel='preconnect' href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=display=swap" rel="stylesheet" />

                <style id="stiches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                {/* style acima busca uma função que manda o JS buscas as estilizações para estiliza-las e aplica-las no back-end */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}