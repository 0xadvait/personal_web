// _document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Page title */}
                <title>Advait Jayant</title>

                {/* Meta tags */}
                <meta
                    name="description"
                    content="macOS desktop with wallpaper"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                {/* Favicon */}
                <link rel="icon" href="/images/favicon_website.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
