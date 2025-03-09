import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Page title (shown in browser tab) */}
                <title>Advait Jayant</title>

                {/* Viewport to disable zoom, etc. */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />

                {/* Favicon in public/images/favicon_website.png */}
                <link rel="icon" href="/images/favicon_website.png" />
            </Head>

            {/* Render the actual page */}
            <Component {...pageProps} />
        </>
    );
}
