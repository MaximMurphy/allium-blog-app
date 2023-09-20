import { useEffect, useState } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const [data, setData] = useState<any>(null); // Replace 'any' with your data structure type

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "https://api.jsonsilo.com/public/28963166-31f3-4ed6-9a02-e0547b884b87";

    // Fetch the data
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); // Set the data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
              ></Image>
            </div>
            <div>
              {data && (
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
                            className="h-72 object-scale-down flex justify-center"
                          />
                        </div>
                        <div className="flex flex-row justify-between">
                          <div>
                            <div className="text-lg font-semibold">
                              {product.name}
                            </div>
                            <div className="text-gray-600 mb-2">
                              {product.description}
                            </div>
                          </div>
                          <div className="text-lime-800 font-semibold mt-6">
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
