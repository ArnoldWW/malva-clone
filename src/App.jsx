import Banner from "./components/Banner";
import ProductsGallery from "./components/ProductsGallery";
import { firstBanners, lastBanners, tags } from "./data";

function App() {
  return (
    <>
      {firstBanners.map(({ title, description, image, align }, index) => (
        <Banner
          key={index}
          title={title}
          description={description}
          image={image}
          align={align}
        />
      ))}

      <ProductsGallery />

      {lastBanners.map(({ title, description, image, align }, index) => (
        <Banner
          key={index}
          title={title}
          description={description}
          image={image}
          align={align}
        />
      ))}

      <section className="w-[90%] mx-auto my-10 flex flex-col md:flex-row items-center justify-between gap-5">
        {tags.map(({ title, text, icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 border-b-2 border-white"
          >
            {icon}

            <h2 className="text-lg font-bold uppercase">{title}</h2>
            <p className="text-sm">{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
