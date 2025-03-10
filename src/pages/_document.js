import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Keep meta description or other shared meta here */}
                <meta
                    name="Advait Jayant"
                    content="Advait's Intro Page"
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
