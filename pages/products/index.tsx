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
          <title>Products</title>
        </Head>
        <Header />
        <Container>
          <div className="flex justify-center ">
            <Image
              src="/branding/tabs/3.png"
              height={500}
              width={2500}
              alt="Posts"
              className="w-96"
            ></Image>
          </div>
        </Container>
      </Layout>
    </>
  );
}
