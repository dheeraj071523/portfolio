import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Dheeraj Kumawat - Full Stack Developer" />
          <meta
            name="description"
            content="Dheeraj Kumawat, also known as dheeraj071523, is a Full-Stack Developer skilled in React, Node.js, and AI-powered apps, passionate about building scalable web solutions with clean UI and deep tech understanding."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Dheeraj Kumawat - Full Stack Developer"
          />
          <meta
            property="og:description"
            content="Dheeraj Kumawat, also known as dheeraj071523, is a Full-Stack Developer skilled in React, Node.js, and AI-powered apps, passionate about building scalable web solutions with clean UI and deep tech understanding."
          />
          <meta
            property="og:image"
            content="https://tse2.mm.bing.net/th?id=OIP.1iKRWPLs6elNfMqclO8yAQHaHa&pid=Api&P=0&h=220"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Dheeraj Kumawat - Full Stack Developer"
          />
          <meta
            property="twitter:description"
            content="Dheeraj Kumawat, also known as dheeraj071523, is a Full-Stack Developer skilled in React, Node.js, and AI-powered apps, passionate about building scalable web solutions with clean UI and deep tech understanding."
          />
          <meta
            property="twitter:image"
            content="https://tse2.mm.bing.net/th?id=OIP.1iKRWPLs6elNfMqclO8yAQHaHa&pid=Api&P=0&h=220"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
