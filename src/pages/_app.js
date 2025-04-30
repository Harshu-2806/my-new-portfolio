import Head from "next/head" ;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
