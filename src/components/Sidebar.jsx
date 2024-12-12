import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Menu from "./Menu";

const tabs = [
  {
    id: 1,
    text: "Mujer"
  },
  {
    id: 2,
    text: "Hombre"
  },
  {
    id: 3,
    text: "Global Brands"
  },
  {
    id: 4,
    text: "Local Brands"
  }
];

const linksMenuMujer = [
  {
    text: "Herencia verde"
  },
  { text: "New In" },
  { text: "Malva Edition" },
  { text: "Ropa" },
  { text: "Calzado" },
  { text: "Diseñadores" },
  { text: "Accesorios" }
];

const linksMenuHombre = [
  { text: "Destacados" },
  { text: "Ropa" },
  { text: "Calzado" },
  { text: "Diseñadores" }
];

const linksMenuBrands = [
  { text: "Destacados" },
  { text: "Ropa" },
  { text: "Calzado" },
  { text: "Accessorios" }
];

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState(1);

  const handledSidebar = () => {
    setOpenSidebar(false);

    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen transition-transform duration-100 z-50 ${
        openSidebar ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      <div className="z-100 bg-white w-full md:w-[50%] md:max-w-[500px] lg:max-w-[600px] h-screen overflow-y-auto border-r">
        <header className="mt-5 border-t">
          <div className="flex justify-between items-stretch m-2 gap-2">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 37 25"
                height="30"
                width="47"
              >
                <path
                  fill="black"
                  d="M21.4818 10.8581C21.4818 9.38959 20.2788 8.1908 18.8051 8.1908C17.3314 8.1908 16.1284 9.38959 16.1284 10.8581C16.1284 10.9181 16.1284 10.978 16.1284 11.0379V16.7622H21.4517V11.0379C21.4517 11.0379 21.4517 10.9181 21.4517 10.8581H21.4818Z"
                ></path>
                <path
                  fill="black"
                  d="M28.79 10.8581C28.79 9.38959 27.587 8.1908 26.1133 8.1908C24.6397 8.1908 23.4367 9.38959 23.4367 10.8581C23.4367 10.9181 23.4367 10.978 23.4367 11.0379V16.7622H28.76V11.0379C28.76 11.0379 28.76 10.9181 28.76 10.8581H28.79Z"
                ></path>
                <path
                  fill="black"
                  d="M14.1434 10.8581C14.1434 9.38959 12.9404 8.1908 11.4667 8.1908C9.99305 8.1908 8.79004 9.38959 8.79004 10.8581C8.79004 10.9181 8.79004 10.978 8.79004 11.0379V16.7622H14.1134V11.0379C14.1134 11.0379 14.1134 10.9181 14.1134 10.8581H14.1434Z"
                ></path>
              </svg>
            </div>

            <button
              className="flex justify-center items-center"
              onClick={handledSidebar}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-4 justify-items-center border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-5 w-full  hover:bg-neutral-50 ${
                activeLink === tab.id
                  ? "bg-neutral-100 border-b border-black"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.text}
            </button>
          ))}
        </div>

        {activeTab === 1 && <Menu links={linksMenuMujer} />}

        {activeTab === 2 && <Menu links={linksMenuHombre} />}

        {activeTab === 3 && <Menu links={linksMenuBrands} />}

        {activeTab === 4 && <Menu links={linksMenuBrands} />}
      </div>
    </div>
  );
}
