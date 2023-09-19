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
          <title>About</title>
        </Head>
        <Header />

        <Container>
          <div className="flex justify-center mb-12">
            <Image
              src="/branding/tabs/4.png"
              height={500}
              width={2500}
              alt="Posts"
              className="w-96"
            ></Image>
          </div>
          <div className="text-justify text-2xl lg:text-4xl flex flex-col gap-12 mb-24">
            <p className="h-fit leading-normal">
              Welcome to Allium, where our love for food meets fashion,
              functionality, and the art of culinary exploration.
            </p>
            <p className="h-fit leading-normal">
              At Allium, our journey begins with an unwavering passion for all
              things culinary. We believe the kitchen is a canvas for creativity
              and flavor, inspiring our every endeavor.
            </p>
            <p className="h-fit leading-normal">
              We're dedicated to unearthing the finest kitchen products. Our
              mission is simple: to guide you to the pinnacle of culinary
              excellence. Our meticulous reviews help you make informed choices.
            </p>
            <p className="h-fit leading-normal">
              Discover our culinary-inspired fashion line on Etsy, where we
              bring the art of food to life in every stitch. From playful food
              puns to stylish culinary characters, our designs redefine culinary
              couture.
            </p>
            <p className="h-fit leading-normal">
              For recipe and kitchen inspiration, be sure to check out our
              Pinterest page.
            </p>
            <p className="h-fit leading-normal">
              Allium is more than a brand; it's a celebration of culinary
              artistry and creativity. Thank you for being a part of our
              culinary family.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
