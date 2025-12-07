import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="sayt-header">
      <div className="header-logo">PetCare</div>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/pets">Pets</a>
        <a href="/appointments">Appointments</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className="header-button">Login</button>
    </header>
  );
}
