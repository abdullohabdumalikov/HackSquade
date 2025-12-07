import React, { useState } from "react";
import "../Regist/Regist.css";
import { useNavigate } from "react-router-dom";

function Regist() {
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() && tell.trim() && question.trim()) {

      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("userToken", token);

      alert("Siz muvaffaqiyatli yozildingiz!");
      navigate("/home");
    } else {
      alert("Iltimos barcha maydonlarni to‘ldiring!");
    }

    setName("");
    setTell("");
    setQuestion("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="forc">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Ismingiz"
          type="text"
        />

        <input
          value={tell}
          onChange={(e) => setTell(e.target.value)}
          required
          placeholder="Telefon raqamingiz"
          type="tel"
        />

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          placeholder="Savolingiz"
          type="text"
        />

        <button type="submit">Yozilish</button>
      </form>
    </div>
  );
}

export default Regist;
