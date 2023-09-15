import Head from "next/head";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Container from "../../components/container";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Allium</title>
        </Head>
        <Container>
          <Header />
          <p>Posts</p>
        </Container>
      </Layout>
    </>
  );
}
