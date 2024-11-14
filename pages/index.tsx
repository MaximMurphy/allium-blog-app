import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
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

        <Container>
          <div className="flex flex-col mb-12">
            <div className="flex justify-center lg:mt-8">
              <Image
                src="/branding/16.png"
                width={2500}
                height={500}
                alt="Hello, Chef!"
                className="w-72 lg:w-[40rem]"
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
            />
            <div className="p-6 lg:p-8 border-y lg:border-y-2 border-allium-darkbrown mb-12 text-allium-darkbrown">
              <p className="text-2xl md:text-4xl text-justify text-pretty mb-8">
                At Allium, our brand is a testament to our deep-rooted passion
                for food. We recognize the essential role of Alliums, like
                Garlic and Onions, in the culinary realm and aim to celebrate
                them through our company.
              </p>
              <Link href="/about" className="text-base md:text-xl font-medium">
                <p className="p-2 border-2 border-allium-green rounded-xl w-fit bg-allium-green hover:bg-allium-cream hover:border-allium-darkgreen text-allium-cream hover:text-allium-darkgreen transition ease-in-out duration-300">
                  More info
                </p>
              </Link>
            </div>

            <section className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-48 text-allium-cream text-2xl md:text-3xl font-medium">
              <div className="flex flex-col items-center justify-center bg-allium-green border-2 border-allium-darkgreen rounded-xl px-4 py-8 lg:p-8">
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
              <div className="flex flex-col items-center justify-center bg-allium-green border-2 border-allium-darkgreen rounded-xl px-4 py-8 lg:p-8">
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
          <div className="p-6 lg:p-8 flex flex-col border-y lg:border-y-2 border-allium-darkbrown mb-24">
            <Link
              href="/posts"
              className="text-3xl md:text-5xl font-semibold hover:underline underline-offset-4 decoration-allium-lightgreen text-allium-darkbrown"
            >
              Blog
            </Link>
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </div>
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
