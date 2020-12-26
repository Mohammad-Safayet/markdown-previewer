import Document, {
    Html, Head, Main, NextScript, DocumentContext
} from 'next/document';
import React from 'react';

import useCustomTheme from '../hooks/styles/useTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import ServerStyleSheets from '@material-ui/styles/ServerStyleSheets';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <ThemeProvider theme={useCustomTheme}>
                        <Main />
                        <NextScript />
                    </ThemeProvider>
                </body>
            </Html>
        )
    }
}

export default MyDocument