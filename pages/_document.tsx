import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <link rel="manifest" href="/assets/manifest.json" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
