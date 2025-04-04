import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { formatPrice } from "../utils";

const slides = [
  {
    id: "1",
    title: "Producto 1",
    price: 380000,
    priceOld: 680000
  },
  {
    id: "2",
    title: "Producto 2",
    price: 300000
  },
  {
    id: "3",
    title: "Producto 3",
    price: 580000,
    priceOld: 740000
  },
  {
    id: "4",
    title: "Producto 4",
    price: 380000
  },
  {
    id: "5",
    title: "Producto 5",
    price: 300000
  },
  {
    id: "6",
    title: "Producto 6",
    price: 280000
  }
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function ProductsGallery() {
  const { addProductToCart } = useContext(AppContext);

  return (
    <div className="w-[90%] mx-auto my-10">
      <Slider {...settings}>
        {/* slides array */}
        {slides.map((item, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={`img/products/${item.id}.webp`}
              alt="Slider"
              className="object-cover"
            />
            <p className="font-bold">COMMON AREA</p>
            <h3>{item.title}</h3>
            {item.priceOld && (
              <p className="line-through text-sm text-red-500">
                {formatPrice(item.priceOld)}
              </p>
            )}
            <p>{formatPrice(item.price)}</p>
            <p>Exclusivo malva</p>

            {/* boton de comprar */}
            <button
              className="bg-neutral-800 text-white p-2 border border-neutral-800 mt-2"
              onClick={() => addProductToCart(item)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
