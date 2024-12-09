import { useState } from "react";

export default function Menu({ links }) {
  /* estado del submenu */
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <div className="mt-5 mx-5 relative overflow-hidden">
      <ul className="flex flex-col gap-2">
        <li className="px-2 py-3 cursor-pointer border-b hover:border-black">
          Ir al inicio
        </li>
        {links.map((link, index) => (
          <li
            key={index}
            className="px-2 py-3 flex justify-between items-center cursor-pointer border-b hover:border-black"
            onClick={toggleSubMenu}
          >
            {link.text}
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </li>
        ))}
      </ul>

      {/* submenu */}
      <div
        className={`absolute bg-white top-0 left-0 w-full h-full transition-transform z-10 ${
          openSubMenu
            ? "trasnsform translate-x-[0%]"
            : "trasnsform translate-x-[100%]"
        }`}
      >
        <button
          onClick={toggleSubMenu}
          className="flex justify-between gap-2 items-center mb-5"
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
          Volver
        </button>
        <ul className="flex flex-col gap-2 cursor-pointer">
          <li className="self-end hover:cursor-pointer">Ver todo</li>
          <li className="hover:cursor-pointer">Ropa</li>
          <li className="hover:cursor-pointer">Calzado</li>
          <li className="hover:cursor-pointer">Bolsos y carteras</li>
        </ul>
      </div>
    </div>
  );
}
