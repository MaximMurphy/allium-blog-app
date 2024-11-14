import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const activeLinkStyles = "text-allium-lightgreen font-bold";

  const activeDesktopLinkStyles = "text-allium-lightgreen";

  return (
    <>
      <section className="bg-allium-cream top-0 z-50 sticky w-full mb-8 transition duration-300 border-y lg:border-y-2 border-allium-darkbrown">
        <div className="h-20 lg:h-fit flex flex-row w-full text-lg lg:text-2xl items-center justify-between font-medium lg px-12 lg:px-32 py-2">
          <Link href="/">
            <Image
              src="/branding/10.png"
              width={75}
              height={75}
              alt="Allium"
              className="h-16 w-16 lg:h-fit"
            />
          </Link>
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 text-3xl font-normal rounded-xl w-16 h-fit"
          >
            {menuOpen ? <span>-</span> : <span>+</span>}
          </button>
          <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:gap-12 text-allium-darkbrown">
            <Link
              href="https://alliumapparel.etsy.com"
              target="_blank"
              className={clsx({
                [activeDesktopLinkStyles]: router.pathname === "/apparel",
                "hover:underline underline-offset-4 decoration-allium-lightgreen":
                  router.pathname !== "/apparel",
              })}
            >
              Apparel
            </Link>
            <Link
              href="/products"
              className={clsx({
                [activeDesktopLinkStyles]: router.pathname === "/products",
                "hover:underline underline-offset-4 decoration-allium-lightgreen":
                  router.pathname !== "/products",
              })}
            >
              Products
            </Link>
            <Link
              href="/posts"
              className={clsx({
                [activeDesktopLinkStyles]: router.pathname === "/posts",
                "hover:underline underline-offset-4 decoration-allium-lightgreen":
                  router.pathname !== "/posts",
              })}
            >
              Blog
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div
            className={clsx(
              "absolute h-screen w-full overflow-hidden overscroll-contain bg-allium-darkbrown flex flex-col items-start justify-start gap-6 p-12 text-allium-cream text-[3rem] font-medium tracking-tight",
              "animate-fadeIn"
            )}
          >
            <Link
              href="/"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/",
                "w-full pb-2 border-b-2 border-allium-lightbrown": true,
              })}
            >
              HOME
            </Link>
            <Link
              href="https://alliumapparel.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/apparel",
                "w-full pb-2 border-b-2 border-allium-lightbrown": true,
              })}
            >
              APPAREL
            </Link>
            <Link
              href="/products"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/products",
                "w-full pb-2 border-b-2 border-allium-lightbrown": true,
              })}
            >
              PRODUCTS
            </Link>
            <Link
              href="/posts"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/posts",
                "w-full pb-2 border-b-2 border-allium-lightbrown": true,
              })}
            >
              BLOG
            </Link>
            <Link
              href="/about"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/about",
                "w-full pb-2 border-b-2 border-allium-lightbrown": true,
              })}
            >
              ABOUT
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
