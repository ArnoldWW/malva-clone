import Accordion from "./Accordion";

const socials = [
  {
    title: "Facebook",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    )
  },
  {
    title: "Instagram",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M16.5 7.5v.01" />
      </svg>
    )
  },
  {
    title: "Pinterest",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-pinterest"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 20l4 -9" />
        <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    )
  },
  {
    title: "Tiktok",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
      </svg>
    )
  },
  {
    title: "Youtube",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
        <path d="M10 9l5 3l-5 3z" />
      </svg>
    )
  }
];

export default function Footer() {
  const itemsCustomerService = [
    { title: "Servicio al cliente" },
    { title: "Quienes somos" },
    { title: "Suscríbete a nuestro Newsletter" }
  ];

  const itemsAbout = [{ title: "Nuestro equipo" }];

  return (
    <footer className="bg-neutral-800 text-white pt-10">
      <div className="w-[95%] mx-auto grid grid-cols-1 gap-10 md:grid-cols-4 ">
        <div className="justify-items-center md:justify-items-start">
          <h3 className="mb-2">Siguenos</h3>
          <hr className="block w-full border-white" />
          <div className="flex gap-5 my-5 flex-wrap">
            {socials.map(({ title, icon }) => (
              <a key={title} href="#">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <Accordion title="Servicio al cliente" items={itemsCustomerService} />

        <Accordion title="Quienes somos" items={itemsAbout} />

        <div className="md:max-w-[500px] w-full text-center md:text-left">
          <h3>Suscríbete a nuestro Newsletter</h3>
          <p>
            Regístrate para recibir 10% de descuento en tu primera orden y
            ofertas exclusivas a lo largo del año.
          </p>

          <form action="">
            <div className="my-5 flex gap-5 justify-center md:justify-start">
              <div>
                <input
                  type="radio"
                  id="mujer"
                  value="mujer"
                  name="newsletter"
                />
                <label htmlFor="mujer">Mujer</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="hombre"
                  value="hombre"
                  name="newsletter"
                />
                <label htmlFor="hombre">Hombre</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="niños"
                  value="niños"
                  name="newsletter"
                />
                <label htmlFor="niños">Niños</label>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <input
                type="text"
                placeholder="Tu email"
                className="p-2 bg-transparent border-neutral-800 border flex-1"
              />
              <button
                type="submit"
                className="bg-neutral-800 text-white p-2 border border-neutral-800"
              >
                Suscribirme
              </button>
            </div>

            <div className="my-5 flex gap-2">
              <input type="checkbox" name="autorizacion" id="autorizacion" />
              <label htmlFor="autorizacion">
                Acepto la política de privacidad
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="w-[95%] mx-auto flex justify-between items-center border-t border-neutral-800 py-2">
        <div className="md:flex gap-5 hidden">
          |<p>Politica de tratamiento de datos</p> |
          <p> Terminos y condiciones</p> | <p>SIC</p>
        </div>

        <div>
          <p>{new Date().getFullYear()} © Malva Online</p>
        </div>
      </div>
    </footer>
  );
}
