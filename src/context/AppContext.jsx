import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* estado del sidebar */
  const [openSidebar, setOpenSidebar] = useState(false);

  /* array de productos */
  const [products, setProducts] = useState([]);

  /* añadir producto al carrito */
  const addProductToCart = (product) => {
    console.log(product);

    setProducts([...products, product]);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        products,
        setOpenSidebar,
        addProductToCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
