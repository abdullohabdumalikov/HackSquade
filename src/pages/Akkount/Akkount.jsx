import React from "react";
import "./Akkount.css";

export default function Profile() {
  const foydalanuvchi = {
    ism: "Victoria",
    familiya: "Novikova",
    telefon: "+7 999 944-12-45",
    email: "victoria@misol.ru",
  };

  const hayvonlar = [
    { nomi: "Pushok", turi: "Mushuk", zoti: "Britan", yoshi: "1 yil 2 oy", tugilganKuni: "15 iyul" },
    { nomi: "Keksik", turi: "It", zoti: "Labrador", yoshi: "3 yil", tugilganKuni: "4 avgust" },
  ];

  const navbatlar = [
    { xizmat: "Emlash", shifokor: "Ivan Petrov", sana: "15.04.2024", vaqt: "15:00" },
    { xizmat: "Maslahat", shifokor: "Mariya Sidorova", sana: "18.04.2024", vaqt: "15:45" },
  ];

  return (
    <div className="profil-konteyner">
      <div className="shaxsiy-malumotlar">
        <div className="profil-sarlavha">
          <div className="profil-avatar">{foydalanuvchi.ism.charAt(0)}</div>
          <div className="profil-tafsilotlar">
            <h1>{foydalanuvchi.ism} {foydalanuvchi.familiya}</h1>
            <p>📱 {foydalanuvchi.telefon}</p>
            <p>✉️ {foydalanuvchi.email}</p>
          </div>
        </div>
        
        <div className="aloqa-malumotlari">
          <div className="malumot-elementi">
            <label>Telefon</label>
            <span>{foydalanuvchi.telefon}</span>
          </div>
          <div className="malumot-elementi">
            <label>Email</label>
            <span>{foydalanuvchi.email}</span>
          </div>
          <div className="malumot-elementi">
            <label>Holati</label>
            <span>Faol mijoz</span>
          </div>
        </div>
      </div>

      <div className="hayvonlar-bo'limi">
        <div className="bo'lim-sarlavha">
          <h2>Mening hayvonlarim</h2>
          <button className="hayvon-qoshish-tugmasi">
            <span className="ikon">+</span> YANGI HAYVON QO'SHISH
          </button>
        </div>
        
        <div className="hayvonlar-panjara">
          {hayvonlar.map((hayvon, indeks) => (
            <div key={indeks} className="hayvon-kartasi">
              <div className="hayvon-ismi">{hayvon.nomi}</div>
              <div className="hayvon-tafsilotlari">
                {Object.entries(hayvon).map(([key, value]) => {
                  if (key !== "nomi") {
                    return (
                      <div className="hayvon-tafsiloti" key={key}>
                        <span className="tafsilot-yorlig'i">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className="tafsilot-qiymati">{value}</span>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="navbatlar-bo'limi">
        <div className="bo'lim-sarlavha">
          <h2>Navbatga yozilish</h2>
        </div>
        
        <table className="navbatlar-jadvali">
          <thead>
            <tr>
              <th>Xizmat</th>
              <th>Shifokor</th>
              <th>Sana</th>
              <th>Vaqt</th>
              <th>Holati</th>
            </tr>
          </thead>
          <tbody>
            {navbatlar.map((navbat, indeks) => (
              <tr key={indeks}>
                <td>{navbat.xizmat}</td>
                <td>{navbat.shifokor}</td>
                <td>{navbat.sana}</td>
                <td>{navbat.vaqt}</td>
                <td>
                  <span className="holat-badge holat-faol">Tasdiqlandi</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
