import { useContext, useState } from "react";
import { Link } from "react-router";
import AppContext from "../context/AppContext";
import { formatPrice } from "../utils";
import CartItem from "../components/CartItem";
import toast from "react-hot-toast";
import CouponForm from "../components/CouponForm";

const detailsOrder = [
  {
    title: "Detalles de la compra",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic."
  },
  {
    title: "Metodos de pago",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic."
  },
  {
    title: "Envios y devoluciones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic."
  }
];

export default function CartPage() {
  /* array de productos del contexto */
  const {
    products,
    removeProductFromCart,
    addProductToCart,
    decreaseProductQuantity
  } = useContext(AppContext);

  /* total a pagar */
  const total = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="my-32 w-[90%] max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Tu carrito</h1>

      {products?.length > 0 ? (
        <>
          <p className="text-center text-sm text-neutral-800">
            {products.length} Articulo(s)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <ul className="flex flex-col col-span-2 gap-5 mt-5 flex-1">
              {products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  removeProductFromCart={removeProductFromCart}
                  addProductToCart={addProductToCart}
                  decreaseProductQuantity={decreaseProductQuantity}
                />
              ))}
            </ul>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 items-start mt-5 self-start p-5 bg-neutral-50 w-full">
                <h2 className="text-center text-lg w-full">
                  Resumen de la compra
                </h2>

                <CouponForm />

                <p className="text-neutral-800 flex justify-between items-center w-full">
                  Total estimado <span>{formatPrice(total)}</span>
                </p>
                <button className="bg-neutral-800 text-white p-2 border border-neutral-800 w-full">
                  Realizar pedido{" "}
                </button>
                <p className="text-sm text-center text-balance">
                  Impuesto incluido. Envío y descuentos calculados en la
                  pantalla de pago.
                </p>
              </div>

              <div>
                {detailsOrder.map((detail, index) => (
                  <details key={index} className="flex flex-col gap-2 mt-5">
                    <summary className="cursor-pointer">
                      {detail.title}
                      <hr className="border-neutral-800 w-full" />
                    </summary>
                    <p>{detail.description}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-center">No has agregado productos a tu carrito</p>
          <Link
            to="/"
            className="mx-auto px-5 py-2 bg-neutral-800 text-white font-bold"
          >
            Continuar Comprando
          </Link>
        </div>
      )}
    </div>
  );
}
