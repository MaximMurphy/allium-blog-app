import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Header />

        <Container>
          <p>About</p>
        </Container>
      </Layout>
    </>
  );
}
