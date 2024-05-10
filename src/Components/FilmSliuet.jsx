import React from "react";
import "./CSS/Sliuet.css"
import ModalTwo from "./ModalTwo";
import Aos from "aos";
import { useEffect } from "react";
import afis2 from "../UI/afis2.png";

const FilmSliuet = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="SliuetContent">
      <div className="afisSliuet" data-aos="fade-right">
        <img src={afis2} alt="" />
      </div>
      <div className="sliuetInfo" data-aos="fade-left">
        <div className="rejectSliuet">
          <h3>
            <span>❝</span> Uyuşturucu bağımlısı bir genç içtiği uyuşturucu
            yüzünden ailesini ve arkadaşlarını tek tek kaybeder. <span>❞</span>
          </h3>
        </div>

        <hr />
        {/* <h2 className="cast-tittle-Sliuet">Oyuncular</h2>
        <div className="castSliuet">
          <p>
            Ahmet <strong> Aktan</strong>
          </p>
          <p>
            Barış <strong> Ecer</strong>
          </p>
          <p>
            Recep <strong> Nizamoğlu</strong>
          </p>
          <p>
            Ahmet <strong> Altay</strong>
          </p>
          <p>
            Zeynep <strong> Sayar</strong>
          </p>
          <br />
        </div> */}

        <div className="castwoSliuet"></div>
        <div className="castSliuetButton">
          <button>
            <ModalTwo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmSliuet;
