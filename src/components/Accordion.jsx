import { useState } from "react";

export default function Accordion({ title = "Titulo", items = [] }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 onClick={handleClick} className="cursor-pointer select-none">
        {title} <span>{open ? "▲" : "▼"}</span>
      </h3>
      <hr className="border-white" />
      {open &&
        items.map((item, index) => (
          <ul key={index}>
            <li>
              <a href="#">{item.title}</a>
            </li>
          </ul>
        ))}
    </div>
  );
}
