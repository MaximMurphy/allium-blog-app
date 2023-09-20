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
          <div className="flex flex-col items-center mb-12">
            <Image
              src="/branding/tabs/4.png"
              height={500}
              width={2500}
              alt="Posts"
              className="w-96"
            ></Image>
            <Image
              src="/branding/alliums.png"
              height={2500}
              width={1000}
              alt="Allium Vegetables"
              className="w-full"
            ></Image>
          </div>
          <div className="text-justify text-2xl lg:text-4xl flex flex-col gap-4 mb-24">
            <p className="h-fit leading-normal font-semibold">
              What are Alliums?
            </p>
            <p className="h-fit leading-normal mb-12">
              This diverse botanical family includes onions, garlic, scallions,
              shallots, and leeks, all bearing the Latin name{" "}
              <span className="italic font-medium">Allium</span>, which directly
              translates to <span className="italic font-medium">Garlic</span>.
              As a collection of edible and aromatic plants, Alliums are known
              for their rich flavors, pungent aromas, and essential role in
              cuisines worldwide. Beyond flavor, these humble flowering plants
              offer a treasure trove of health benefits, including
              cardiovascular protection, anti-cancer properties, and
              anti-inflammatory effects, thanks to sulfur compounds and
              polyphenols like quercetin.
            </p>
            <p className="h-fit leading-normal mb-8">
              At Allium, our brand is a testament to our deep-rooted passion for
              food. With a culinary background, we recognize the essential role
              of Alliums like Garlic and Onions in the world of food.
            </p>
            <p className="h-fit leading-normal mb-8">
              We're dedicated to discovering the best products for all budgets
              and curating a selection to elevate your kitchen life. Our
              comprehensive reviews help you make informed choices.
            </p>
            <p className="h-fit leading-normal">
              Discover our food-inspired merchandise on Etsy. For recipe and
              kitchen inspiration, be sure to check out our Pinterest page.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
