import { createContext, useState } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* estado del sidebar */
  const [openSidebar, setOpenSidebar] = useState(false);

  /* array de productos */
  const [products, setProducts] = useState([]);

  /* añadir producto al carrito */
  const addProductToCart = (product) => {
    /* validar si ya existe el producto */
    const existeProducto = products.find((p) => p.id === product.id);
    if (existeProducto) {
      /* si existe, agregar 1 unidad */
      toast.success("Se agrego 1 unidad al producto");
      setProducts([
        ...products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      ]);
    } else {
      /* si no existe, agregar el producto con 1 unidad */
      toast.success("Producto agregado al carrito");
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  /* remover producto del carrito */
  const removeProductFromCart = (product) => {
    if (confirm("¿Estás seguro que deseas eliminar este producto?")) {
      setProducts(products.filter((p) => p.id !== product.id));
      toast.success("Producto eliminado del carrito");
    }
  };

  /* restar una unidad al producto */
  const decreaseProductQuantity = (product) => {
    setProducts([
      ...products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    ]);
    toast.success("Unidad restada del producto");
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        products,
        setOpenSidebar,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
