import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import Image from "next/image";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blogs</title>
        </Head>
        <Container>
          <div className="flex justify-center ">
            <Image
              src="/branding/tabs/2.png"
              height={500}
              width={2500}
              alt="Posts"
              className="w-96"
              quality={65}
            ></Image>
          </div>

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
