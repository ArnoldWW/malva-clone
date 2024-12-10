import { useContext, useState } from "react";
import toast from "react-hot-toast";
import AppContext from "../context/AppContext";

export default function CouponForm() {
  /* cupon estado */
  const { coupon, setCoupon } = useContext(AppContext);

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
          onChange={(e) => setCoupon({ ...coupon, text: e.target.value })}
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
            <button onClick={() => setCoupon({ text: "", valid: false })}>
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
  );
}
