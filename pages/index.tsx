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
        </Head>

        <Header />
        <Container>
          <div className="flex flex-col mb-24">
            <div className="flex justify-center">
              <Image
                src="/branding/16.png"
                width={2500}
                height={500}
                alt="Hello, Chef!"
                className="w-72 lg:w-[32rem]"
              />
            </div>

            <Image
              src="/branding/14.png"
              width={7000}
              height={2000}
              alt="Allium"
              className="w-96 md:w-fit"
            />
            <p className="p-4 lg:p-8 bg-neutral-50 border-2 border-neutral-200 rounded-xl text-2xl drop-shadow-md md:text-4xl text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Link href="/posts" className="text-2xl md:text-4xl font-semibold">
            Blogs →
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
