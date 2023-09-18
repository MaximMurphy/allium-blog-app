import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Products</title>
        </Head>
        <Header />
        <Container>
          <p>Products</p>
        </Container>
      </Layout>
    </>
  );
}
