import { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import AppContext from "../context/AppContext";
import { Link, useLocation } from "react-router";

export default function Header() {
  const { openSidebar, products, setOpenSidebar } = useContext(AppContext);

  const [lightHeader, setLigthHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    /* COLOCAR EL HEADER EN BLANCO SI NO ES EL HOME */
    setLigthHeader(location.pathname !== "/");

    const handleScroll = () => {
      if (location.pathname === "/") {
        const scrollTop = window.scrollY;
        setLigthHeader(scrollTop > 50); // Cambia el estado si el scroll supera 50px
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handledSidebar = () => {
    setOpenSidebar(!openSidebar);

    /* overflow hidden */
    document.body.style.overflow = "hidden";
  };

  return (
    <header
      className={`${
        lightHeader ? "bg-white" : "bg-transparent border-none"
      } fixed top-0 left-0 z-50 w-full transition-colors`}
    >
      <div className=" bg-white text-sm border-b">
        <div className="w-[98%] mx-auto">
          <a
            href="#"
            className="block text-center text-balance hover:underline"
          >
            Suscribete hoy y recibe un 10% de descuento en tu primera compra
          </a>
        </div>
      </div>
      <div
        className={`w-[95%] mx-auto ${
          lightHeader ? "text-black" : "text-white"
        } py-2 flex justify-between items-center `}
      >
        <div className="flex justify-between items-center gap-5">
          <button className="p-1" onClick={handledSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8l16 0" />
              <path d="M4 16l16 0" />
            </svg>
          </button>

          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        <div className="block md:hidden">
          <Logo />
        </div>

        <div className="flex gap-5 items-center">
          {/* icons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user hidden md:block"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>

          <Link
            to="/cart"
            className="block relative"
            onClick={() => window.scrollTo(0, 0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            {products.length > 0 && (
              <span className="absolute bottom-[-45%] -right-[40%] text-sm bg-black text-white px-[5px] rounded-full text-[10px]">
                {products.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
