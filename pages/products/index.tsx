import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((response) => response.json());

export default function Index() {
  // Use SWR for data fetching
  const { data, error } = useSWR(
    "https://api.jsonsilo.com/public/28963166-31f3-4ed6-9a02-e0547b884b87",
    fetcher
  );

  // Check if data is being fetched
  const isLoading = !data && !error;

  return (
    <>
      <Layout>
        <Head>
          <title>Products</title>
        </Head>
        <Header />
        <Container>
          <div className="flex flex-col gap-12 mb-36">
            <div className="flex justify-center">
              <Image
                src="/branding/tabs/3.png"
                height={500}
                width={2500}
                alt="Posts"
                className="w-96"
                quality={65}
              ></Image>
            </div>
            <div>
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-lime-800"></div>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.values(data).map((product: any) => (
                    <li
                      key={product.id}
                      className="border-2 p-4 rounded-lg hover:shadow-inner hover:shadow-neutral-500 transition duration-300 bg-neutral-50 border-neutral-200"
                    >
                      <Link href={product.link} target="_blank">
                        <div className="flex justify-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            height={200}
                            width={200}
                            quality={65}
                            className="h-72 object-scale-down flex justify-center"
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div>
                            <div className="text-lg font-semibold">
                              {product.name}
                            </div>
                            <div className="text-sm text-neutral-800 mb-2">
                              {product.excerpt}
                            </div>
                          </div>
                          <div className="text-base text-lime-800 font-semibold mt-6">
                            {product.price}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
