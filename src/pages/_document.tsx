import { emotionCache } from '@/emotionCache';
import { ServerStyles, createStylesServer } from '@mantine/next';
import type { DocumentContext, DocumentType } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const _Document: DocumentType = () => {
  return (
    <Html lang="zh-CN">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

const stylesServer = createStylesServer(emotionCache);

_Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
        />
      </>
    ),
  };
};

export default _Document;
