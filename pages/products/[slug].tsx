import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
import type Product from "../../interfaces/product";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query; // Get the product slug from the URL

  // Define the API URL for fetching the product data
  const apiUrl =
    "https://api.jsonsilo.com/public/28963166-31f3-4ed6-9a02-e0547b884b87";

  // Use SWR to fetch the product data
  const { data, error } = useSWR(apiUrl, fetcher);

  // Check if data is being fetched
  const isLoading = !data && !error;
  if (isLoading) {
    return (
      <Layout>
        <Header />
        <Container>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-lime-800"></div>
          </div>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return <div>Error fetching product data</div>;
  }

  // Find the product with the matching slug
  const product: Product = Object.values(data).find(
    (product: Product) => product.slug === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout>
      <Header />

      <div className="p-4 lg:p-0 w-full flex flex-col md:flex-row items-center justify-center lg:gap-24 mb-12">
        <Link href={product.link} target="_blank">
          <Image
            src={product.image}
            alt={product.name}
            height={400}
            width={400}
            quality={65}
            className="h-72 md:h-[30rem] object-scale-down mb-8"
          />
        </Link>

        <div className="bg-neutral-50 border-2 border-neutral-200 p-6 lg:p-8 rounded-xl drop-shadow-md flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>{" "}
          <p className="text-xl text-lime-800 font-semibold">{product.price}</p>
          <p className="lg:w-96 text-base text-neutral-800 mb-4 text-justify">
            {product.description}
          </p>
          <div className="flex justify-center md:justify-normal">
            <Link
              href={product.link}
              target="_blank"
              className="text-xl font-medium p-2 border-2 border-lime-800 rounded-xl w-fit bg-lime-800 hover:bg-neutral-50 text-white hover:text-black"
            >
              Buy on Amazon
            </Link>
          </div>
          <p className="text-neutral-800 font-light italic text-xs text-center lg:text-start">
            *This is an affiliate link*
          </p>
        </div>
      </div>
    </Layout>
  );
}
