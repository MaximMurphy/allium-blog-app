import Link from "next/link";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section className="flex flex-row justify-between">
      <div className="flex flex-row gap-12 text-lg md:text-2xl font-semibold tracking-tight md:tracking-tighter mb-32 mt-8">
        <Link href="/" className="hover:underline">
          Allium
        </Link>
        <Link href="/posts" className="hover:underline">
          Blog
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
      <div className="flex flex-row gap-8 text-lg md:text-3xl font-semibold tracking-tight md:tracking-tighter mb-20 mt-8">
        <Link
          href="https://www.etsy.com/shop/AlliumApparel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-orange-600"
        >
          <Icon icon="simple-icons:etsy" />
        </Link>
        <Link
          href="https://www.pinterest.com/alliumlover/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-red-600"
        >
          <Icon icon="simple-icons:pinterest" className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
