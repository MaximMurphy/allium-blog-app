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

  const activeLinkStyles =
    "underline underline-offset-4 decoration-allium-lightgreen";

  const activeDesktopLinkStyles = "text-allium-lightgreen";

  return (
    <>
      <section className="bg-allium-cream top-0 z-50 sticky w-full mb-8 transition duration-300">
        <div className="h-20 lg:h-fit flex flex-row w-full text-lg lg:text-2xl items-center justify-between font-semibold tracking-normal lg:tracking-tighter px-12 lg:px-32 py-2">
          <Link href="/">
            {router.pathname === "/about" ? (
              <Image
                src="/branding/10.png"
                width={75}
                height={75}
                alt="Allium"
                className="h-16 w-16 lg:h-fit"
              />
            ) : (
              <Image
                src="/branding/10.png"
                width={75}
                height={75}
                alt="Allium"
                className="h-16 w-16 lg:h-fit"
              />
            )}
          </Link>
          <button
            onClick={handleMenuToggle}
            className={clsx({
              [activeLinkStyles]: menuOpen,
              "lg:hidden text-allium-darkbrown": true,
            })}
          >
            Menu
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
          <div className="absolute h-screen w-full overflow-hidden overscroll-contain bg-allium-darkbrown flex flex-col items-start justify-start gap-6 p-12 text-allium-cream text-[3rem] font-semibold tracking-normal">
            <Link
              href="/"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/",
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
              })}
            >
              APPAREL
            </Link>
            <Link
              href="/products"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/products",
              })}
            >
              PRODUCTS
            </Link>
            <Link
              href="/posts"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/posts",
              })}
            >
              BLOG
            </Link>
            <Link
              href="/about"
              className={clsx({
                [activeLinkStyles]: router.pathname === "/about",
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
