import Link from "next/link";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import { Icon } from "@iconify/react";

export default function Apparel() {
  return (
    <Layout>
      <Head>
        <title>Apparel</title>
      </Head>
      <Container>
        <div className="h-full w-full flex flex-col items-center justify-center gap-12 lg:gap-24 pt-12 lg:pt-0 pb-36 text-center text-3xl lg:text-7xl leading-normal font-medium">
          <p>At the moment, all of our apparel can be found on ETSY.</p>
          <Link
            href="https://www.etsy.com/shop/AlliumApparel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition ease-in-out duration-500"
          >
            <Icon
              icon="akar-icons:link-out"
              className="h-auto w-8 lg:w-12 hover:scale-150 transition ease-in-out duration-500"
            />
          </Link>

          <p>Our online store is in the works and coming soon.</p>
        </div>
      </Container>
    </Layout>
  );
}
