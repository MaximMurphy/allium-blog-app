import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Allium</title>
          <meta
            name="p:domain_verify"
            content="5fd45743fca9f7e5cc6a1a7f78f9e4a0"
          />
        </Head>

        <Header />
        <Container>
          <div className="flex flex-col mb-24">
            <div className="flex justify-center lg:mt-8">
              <Image
                src="/branding/16.png"
                width={2500}
                height={500}
                alt="Hello, Chef!"
                className="w-72 lg:w-[32rem]"
                quality={65}
                priority={true}
              />
            </div>

            <Image
              src="/branding/14.png"
              width={7000}
              height={2000}
              alt="Allium"
              className="w-96 md:w-fit lg:-mt-6 mb-6 lg:mb-0"
              priority={true}
              quality={65}
            />
            <div className="p-6 lg:p-8 bg-allium-lightbrown border-2 border-allium-darkbrown rounded-xl mb-12 drop-shadow-sm text-allium-cream">
              <p className="text-2xl md:text-4xl text-justify mb-8">
                At Allium, our brand is a testament to our deep-rooted passion
                for food. We recognize the essential role of Alliums like Garlic
                and Onions in the culinary realm and aim to celebrate them
                through our company.
              </p>
              <Link href="/about" className="text-md md:text-xl font-medium">
                <p className="p-2 border-2 border-allium-green rounded-xl w-fit bg-allium-green hover:bg-allium-lightbrown hover:border-allium-lightgreen transition ease-in-out duration-300">
                  More info
                </p>
              </Link>
            </div>

            <section className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-48 px-4 py-8 lg:p-8 bg-allium-lightbrown text-allium-cream border-2 border-allium-darkbrown rounded-xl text-2xl drop-shadow-sm md:text-4xl text-center font-semibold">
              <div className="flex flex-col items-center justify-center">
                <p>For merchandise:</p>
                <Link
                  href="https://www.etsy.com/shop/AlliumApparel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-600"
                >
                  <Image
                    src="/branding/etsy.png"
                    width={2500}
                    height={500}
                    alt="Etsy"
                    className="w-96 mt-4 lg:mt-8 hover:animate-pulse"
                    quality={65}
                  ></Image>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>For inspiration:</p>
                <Link
                  href="https://www.pinterest.com/alliumlover/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 hover:animate-pulse"
                >
                  <Image
                    src="/branding/pinterest.png"
                    width={2500}
                    height={500}
                    alt="Pinterest"
                    className="w-96 mt-4 lg:mt-8"
                    quality={65}
                  ></Image>
                </Link>
              </div>
            </section>
          </div>
          <Link
            href="/posts"
            className="text-3xl md:text-5xl font-semibold hover:underline underline-offset-4 decoration-lime-800"
          >
            Blog
          </Link>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
