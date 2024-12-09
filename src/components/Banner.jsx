import { Link } from "react-router";

export default function Banner({
  title,
  description,
  image = "1",
  align = "start"
}) {
  return (
    <section className="w-full mb-2 relative">
      {title && description && (
        <div
          className={`absolute text-white w-[90%] py-10 top-0 left-0 right-0 mx-auto h-full flex flex-col items-${align} justify-end md:justify-center gap-2`}
        >
          <h2 className="text-4xl font-bold uppercase">{title}</h2>
          <p>{description}</p>
          <Link to="/" className="text-white underline">
            Buy now
          </Link>
        </div>
      )}

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`/img/banners/${image}.webp`}
        />
        <source
          media="(max-width: 768px)"
          srcSet={`/img/banners/${image}-mobile.webp`}
        />
        <img
          src={`/img/banners/${image}-mobile.webp`}
          alt="Imagen de portada"
        />
      </picture>
    </section>
  );
}
