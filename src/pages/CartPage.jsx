import { useContext } from "react";
import { Link } from "react-router";
import AppContext from "../context/AppContext";

export default function CartPage() {
  /* array de productos del contexto */
  const { products } = useContext(AppContext);
  console.log(products);

  return (
    <div className="my-40 w-[90%] mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Tu carrito</h1>

      {products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.id} className="border-b border-neutral-800 p-5">
              <img
                src={`img/products/${product.id}.webp`}
                alt="Slider"
                className="object-cover"
              />
              <p className="font-bold">{product.title}</p>
              {product.priceOld && (
                <p className="line-through text-sm text-red-500">
                  {product.priceOld}
                </p>
              )}
              <p>$380.000</p>
              <p>Exclusivo malva</p>
            </div>
          ))}
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
