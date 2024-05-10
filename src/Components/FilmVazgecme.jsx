import React from "react";
import "./CSS/vazgecme.css"
import ModalOne from "./ModalOne";
import Aos from "aos";
import { useEffect } from "react";
import vazgecme from "../UI/vazgecme.jpg";

const FilmVazgecme = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="VazgecmeContent">
      <div className="afis" data-aos="fade-right">
        <img src={vazgecme} alt="" />
      </div>
      <div className="vazgecmeInfo" data-aos="fade-left">
        <div className="reject">
          <h3>
            <span>❝</span> Uyuşturucu bağımlısı bir genç içtiği uyuşturucu
            yüzünden ailesini ve arkadaşlarını tek tek kaybeder. <span>❞</span>
          </h3>
        </div>

        <hr />
         {/* <h2 className="cast-tittle">Oyuncular</h2>
        <div className="cast">
          <p>
            Ahmet <strong> Aktan</strong>
          </p>
          <p>
            Ömer <strong> Yılmaz</strong>
          </p>
          <p>
            Recep <strong> Nizamoğlu</strong>
          </p>
          <p>
            Şehriban <strong> Armağan</strong>
          </p>
          <p>
            Feyza Sude <strong> Kır</strong>
          </p>
        </div>  */}

        <div className="castwo"></div>
        <div className="castButton">
          <button>
            <ModalOne />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmVazgecme;
