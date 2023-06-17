import type { DocumentType } from 'next/dist/shared/lib/utils';
import { Head, Html, Main, NextScript } from 'next/document';

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

export default _Document;
