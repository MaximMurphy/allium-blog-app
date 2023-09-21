import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <>
      <section className="bg-white/60 top-0 z-50 sticky backdrop-blur-sm h-fit w-full flex flex-row justify-center md:justify-between mb-8 px-12 lg:px-32 pb-4 pt-4">
        <div className="flex flex-row gap-4 lg:gap-12 text-lg lg:text-2xl items-center font-semibold tracking-normal lg:tracking-tighter">
          <Link href="/">
            <Image src="/branding/10.png" width={75} height={75} alt="Allium" />
          </Link>
          <Link
            href="/posts"
            className="hover:underline underline-offset-4 decoration-lime-800"
          >
            Blog
          </Link>
          <Link
            href="/products"
            className="hover:underline underline-offset-4 decoration-lime-800"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="hover:underline underline-offset-4 decoration-lime-800 hidden md:flex"
          >
            About
          </Link>
        </div>
        <div className="hidden md:flex flex-row gap-8 text-lg md:text-3xl font-semibold mt-6">
          <Link
            href="https://www.etsy.com/shop/AlliumApparel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            <Icon icon="simple-icons:etsy" />
          </Link>
          <Link
            href="https://www.pinterest.com/alliumlover/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <Icon icon="simple-icons:pinterest" className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
