import React, { useEffect } from "react";
import "./CSS/aboutUstextCard.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Aos from "aos";
import "aos/dist/aos.css";
import ahmed from "../UI/ahmed.jpg";
import halit from "../UI/halit-uz.jpg";
import dogu from "../UI/foto3.jpg";

const AboutUsTextCard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="about-cards">
        <div className="aboutImg">
          <img data-aos="fade-right" src={ahmed} alt="" />
        </div>

        <div className="aboutText">
          <h1 className="transparanText" data-aos="fade-right">
            HAKKIMIZDA
          </h1>
          <div className="aboutTextLeft" data-aos="fade-down">
            <h1>
              Ahmed Aktan <span>kimdir?</span>
            </h1>
            <h3>Yönetmen / Kameraman</h3>
            <hr />
          </div>
          <div className="aboutTextRight" data-aos="fade-left">
            <h3>
            Benim adım Ahmed.  Ben bir yönetmenim ayriyetten kameramanlık yaptım, yaptığımız işlerde sizin memnuniyetiniz bizim için çok önemlidir
            </h3>
          </div>
          <div className="button">
            <button className="aboutButton">
              Daha fazlası
              <ArrowForwardIcon fontSize="small" className="buttonIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="aboutImg">
          <img data-aos="fade-right" src={halit} alt="" />
        </div>

        <div className="aboutText">
          <div className="aboutTextLeft" data-aos="fade-down">
            <h1>
              Muhammet Halit Uz <span>kimdir?</span>
            </h1>
            <h3>Yönetmen / Yazar</h3>
            <hr />
          </div>
          <div className="aboutTextRight" data-aos="fade-left">
            <h3>
            Muhammed Halit UZ, hayali olan Radyo, Televizyon ve Sinema bölümüne 2020 yılında Fırat Üniversitesi’nde başladı. Sinema, reklamcılık ve sosyal medya üstüne birçok eğitimi başarıyla tamamlayıp gözünü diktiği ufka kadar ilerlemektedir.
            </h3>
          </div>
          <div className="button">
            <button className="aboutButton">
              Daha fazlası
              <ArrowForwardIcon fontSize="small" className="buttonIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="about-cards">
        <div className="aboutImg">
          <img data-aos="fade-right" src={dogu} alt="" />
        </div>

        <div className="aboutText">
          <div className="aboutTextLeft" data-aos="fade-down">
            <h1>
              Doğukan Karakurt <span>kimdir?</span>
            </h1>
            <h3>Yönetmen / Senarist</h3>
            <hr />
          </div>
          <div className="aboutTextRight" data-aos="fade-left">
            <h3>
            Merhaba Ben Doğukan Karakurt. 23 yaşındayım, İstanbul'da yaşamaktayım. Sinema ve Felsefeye ilgi duyan birisiyim. Sinemanın ve felsefenin birleşip beyaz perdeye aktarılmasını hep sevmişimdir. Bu alanda da Senaryo çalışmaları yürütmekteyim.Oyunculuk eğitimi, Senaryo eğitimi, kurgu, montaj ve photoshop alanlarında eğitimler gördüm.
            </h3>
          </div>
          <div className="button">
            <button className="aboutButton">
              Daha fazlası
              <ArrowForwardIcon fontSize="small" className="buttonIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTextCard;
