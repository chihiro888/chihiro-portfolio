import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>안진용 | An Jinyong, 풀스택 개발자, 풀스택 엔지니어</title>
        <meta name="description" content="삶에서 모든 일은 ‘합산’으로 나타난다. 조금씩 조금씩 빚을 지면 어느 날 갑자기 가난해질 것이고 조금씩 조금씩 저축을 하면 어느 날 문득 부자가 되어 있을 것이다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
