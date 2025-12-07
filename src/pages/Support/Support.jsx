import React from "react";
import "./Support.css";

const supports = [
  {
    title: "Aibolit – Krasnopolanskaya ko‘chasi",
    address: "Krasnopolanskaya ko‘chasi, 30",
    phone: "96 222 92 91",
  },
  {
    title: "Aibolit – Tulaka ko‘chasi",
    address: "Karl Marks ko‘chasi, 7",
    phone: "96 223 92 99",
  },
];

export default function Support() {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <div className="support-wrapper">
        <div className="support-list">
          {supports.map((support, idx) => (
            <div key={idx} className="support-card">
              <h2>{support.title}</h2>
              <p>📍 {support.address}</p>
              <p>📞 {support.phone}</p>
              <p>⏰ 24/7 ish vaqti</p>
            </div>
          ))}
        </div>
        <div className="support-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22989.543509971507!2d44.50807992932336!3d48.72747699084414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4166cf5f3d1b6c03%3A0x84a7f75b8c6a26b3!2z0JrQu9C10YHQutC40Y8g0JzQvtC70LjRhtC40YbQsA!5e0!3m2!1sru!2s!4v1701970268361!5m2!1sru!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
