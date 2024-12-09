import { useContext, useState } from "react";
import { Link } from "react-router";
import AppContext from "../context/AppContext";
import { formatPrice } from "../utils";
import CartItem from "../components/CartItem";
import toast from "react-hot-toast";

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

  /* cupon estado */
  const [coupon, setCoupon] = useState({
    text: "",
    valid: false
  });

  /* total a pagar */
  const total = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handledCoupon = (e) => {
    e.preventDefault();

    if (coupon.text.trim() === "") {
      return toast.error("El cupón no puede estar vacío");
    }

    if (coupon.text.trim() !== "WelcomeMALVA") {
      return toast.error("El cupón no es válido");
    }

    if (coupon.text.trim() === "WelcomeMALVA") {
      toast.success("¡Felicidades! Has recibido un cupón de descuento");
      setCoupon({ ...coupon, valid: true });
    }
  };

  return (
    <div className="my-32 w-[90%] max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Tu carrito</h1>
      {products.length > 0 && (
        <p className="text-center text-sm text-neutral-800">
          {products.length} Articulo(s)
        </p>
      )}

      {products?.length > 0 ? (
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

              <form
                className="flex flex-col w-full justify-between"
                onSubmit={handledCoupon}
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Cupón de descuento"
                    className="p-2 border border-neutral-800 flex-1"
                    value={coupon.text}
                    onChange={(e) =>
                      setCoupon({ ...coupon, text: e.target.value })
                    }
                  />
                  <button
                    className="block bg-neutral-800 text-white border border-neutral-800 px-2 h-full"
                    type="submit"
                  >
                    Aplicar
                  </button>
                </div>

                {coupon.valid && (
                  <div className="flex flex-col items-start gap-2 justify-start my-2">
                    <p className="text-sm">
                      ¡Felicidades! Has recibido un cupón de descuento
                    </p>

                    <p className="bg-neutral-100 p-2 text-sm flex items-center gap-2">
                      {coupon.text}
                      <button
                        onClick={() => setCoupon({ text: "", valid: false })}
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
                    </p>
                  </div>
                )}
              </form>

              <p className="text-neutral-800 flex justify-between items-center w-full">
                Total estimado <span>{formatPrice(total)}</span>
              </p>
              <button className="bg-neutral-800 text-white p-2 border border-neutral-800 w-full">
                Realizar pedido{" "}
              </button>
              <p className="text-sm text-center text-balance">
                Impuesto incluido. Envío y descuentos calculados en la pantalla
                de pago.
              </p>
            </div>

            <div>
              {detailsOrder.map((detail, index) => (
                <details key={index} className="flex flex-col gap-2 mt-5">
                  <summary>
                    {detail.title}
                    <hr className="border-neutral-800 w-full" />
                  </summary>
                  <p>{detail.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
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
