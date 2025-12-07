import React from 'react'
import '../Services/Service.css'
import { Link } from 'react-router-dom'
import doc from '/public/doctor1.jpg'
import dog from '/public/dog.png'

function Service() {
  return (
    <div className="service">
      <div className="therapy">
        <h2>Terapiya</h2>
        <ul>
          <li>
            <a href="#qabul">QABULGA YOZILISH</a>
          </li>
          <li>
            <a href="#terapiya">KLINIKAMIZDA TERAPIYA</a>
          </li>
          <li>
            <a href="#s1">SARLAHA 1</a>
          </li>
          <li>
            <a href="#s2">SARLAHA 2</a>
          </li>
          <li>
            <a href="#">NARXLAR</a>
          </li>
        </ul>
      </div>
      <div className="therapy-about">
        
        <h3>Terapevt bilan uchrashuv tayinlang</h3>
        <div className="cards">
          <div>
            <img src={doc} alt="" width={50} height={50} />
            <h4>Ивантелеев Иван Константинович</h4>
            <p>ближайшая дата приема: 29.08.19</p>
          </div>
          <div>
            <img src={doc} alt="" width={50} height={50} />
            <h4>Ивантелеев Иван Константинович</h4>
            <p>ближайшая дата приема: 29.08.19</p>
          </div>
          <div>
            <img src={doc} alt="" width={50} height={50} />
            <h4>Ивантелеев Иван Константинович</h4>
            <p>ближайшая дата приема: 29.08.19</p>
          </div>
        </div>
        <div className="text-card">
          <h2 className="text-card__title">Терапия в нашей клинике</h2>
          <p className="text-card__description">
            Терапия - область гуманной и ветеринарной медицины, занимающаяся
            непосредственно лечением патологий, облегчением состояния больного и
            устранением симптомов заболеваний.
          </p>
          <ol className="text-card__list">
            <li className="text-card__item">
              Терапевтическое отделение клиники Айболит занимается диагностикой
              и лечением следующих болезней:
            </li>
            <li className="text-card__item">- органов пищеварения;</li>
            <li className="text-card__item">
              - органов сердечно-сосудистой системы;
            </li>
            <li className="text-card__item">- органов дыхательной системы;</li>
            <li className="text-card__item">- нервной системы;</li>
            <li className="text-card__item">
              - органов мочевыделительной системы;
            </li>
            <li className="text-card__item">- эндокринной системы;</li>
            <li className="text-card__item">- нарушения обмена веществ;</li>
            <li className="text-card__item">- кожи и ее производных;</li>
            <li className="text-card__item">- органов чувств;</li>
            <li className="text-card__item">- репродуктивной области;</li>
            <li className="text-card__item">
              - инфекционной и инвазионной природы;
            </li>
            <li className="text-card__item">- токсикологической природы.</li>
          </ol>
        </div>

        <div className="doktor">
          <h2 className="doktor__title">Подзаголовок 1</h2>
          <p className="doktor__description">
            В нашей клинике имеются как врачи-терапевты общей практики, так и
            узкие специалисты по ряду перечисленных областей, что дает
            возможность излечивать тяжелые и редкие случаи патологий.
          </p>
          <img className="doktor__image" src={dog} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Service
