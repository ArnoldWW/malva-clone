import { formatPrice } from "../utils";

export default function CartItem({
  product,
  removeProductFromCart,
  addProductToCart,
  decreaseProductQuantity
}) {
  return (
    <li
      key={product.id}
      className="flex gap-2 border-b pb-2 mb-2 border-neutral-800"
    >
      <img
        src={`img/products/${product.id}.webp`}
        alt="Slider"
        className="object-cover w-44"
      />
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <p className="font-bold">COMMON AREA</p>
          <p className="">{product.title}</p>
          <p className="text-neutral-800">{formatPrice(product.price)}</p>
        </div>

        <div>
          <button
            className="underline text-sm"
            onClick={() => {
              removeProductFromCart(product);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>

      <div className="flex gap-5 items-start">
        <button onClick={() => addProductToCart(product)}>+</button>
        <span>{product.quantity}</span>
        {product.quantity > 1 && (
          <button onClick={() => decreaseProductQuantity(product)}>-</button>
        )}
      </div>
    </li>
  );
}
