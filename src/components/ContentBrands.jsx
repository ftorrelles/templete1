import React from "react";
import "../styles/Brands.css";

const brands = [
  { name: "Torrelles", logo: "/brand-1.png" },
  { name: "Lazos de Amor", logo: "/brand-2.png" },
  { name: "Julio César", logo: "/brand-3.png" },
  { name: "NetBar", logo: "/brand-4.png" },
  { name: "Biupoll", logo: "/brand-5.png" },
  { name: "Vivir CHevere", logo: "/brand-6.png" },
  { name: "NexDev", logo: "/brand-7.png" },
];

const ContentBrands = () => {
  return (
    <section className="content-brands-modern">
      <h2 className="brands-title">Marcas que confían en nosotros</h2>
      <div className="brands-grid-modern">
        {brands.map((brand, index) => (
          <div className="brand-card-modern" key={index}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo-modern"
            />
            <p className="brand-name-modern">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentBrands;
