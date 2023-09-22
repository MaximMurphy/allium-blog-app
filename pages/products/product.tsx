import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Product</title>
        </Head>
        <Header />

        <Container>
          <div className="h-screen w-full flex justify-center border-2 border-orange-600">
            <p>Hello world</p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
