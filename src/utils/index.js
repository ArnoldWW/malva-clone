/* formatear numero a peso colombiano */
export const formatPrice = (price) => {
  return Number(price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};
