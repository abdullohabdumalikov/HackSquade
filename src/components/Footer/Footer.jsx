import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="sayt-footer">
      <div className="footer-section footer-about">
        <h3>PetCare</h3>
        <p>
          Biz sizning sevimli hayvonlaringizga g'amxo'rlik qilamiz va
          ularga eng yaxshi xizmatlarni taqdim etamiz.
        </p>
      </div>

      <div className="footer-section footer-links">
        <h3>Tezkor linklar</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/pets">Pets</a></li>
          <li><a href="/appointments">Appointments</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section footer-contact">
        <h3>Kontaktlar</h3>
        <p>📞 +7 999 944-12-45</p>
        <p>✉️ victoria@misol.ru</p>
        <p>📍 Toshkent, O'zbekiston</p>
      </div>
    </footer>
  );
}
