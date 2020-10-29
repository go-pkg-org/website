import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleAnalytics() {
    return {
      __html: ``,
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <meta
            name="description"
            content="Reliable package manager for Golang software"
          />
          <meta property="og:title" content="Gopkg" />
          <meta
            property="og:description"
            content="Reliable package manager for Golang software"
          />
          <meta property="og:image" content="https://gopkg.org/" />
          <meta name="twitter:title" content="Gopkg" />
          <meta
            name="twitter:description"
            content="Reliable package manager for Golang software"
          />
          <meta name="twitter:image" content="https://gopkg.org/" />
          <meta name="twitter:card" content="summary" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
            </>
          )}
        </body>
      </Html>
    );
  }
}
