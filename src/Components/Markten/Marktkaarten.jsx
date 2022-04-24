//import { Card } from "@mui/material";
import React from "react";
import Hilversum from "../Media/marktHilversum.jpeg";
import Style from "./Marktkaarten.module.css";
import Doorn from "../Media/Doorn.jpeg";
import Zeist from "../Media/Zeist.jpeg";
import Logo from "../Media/LogoRood.png";

function Marktkaarten() {
  return (
    <div>
      <p className={Style.Marktkaarten__Textonthetopofthepage}>
        Op de markten verkopen wij verse en verpakte stroopwafels ook kunt u
        terecht voor gluttenvrije producten. <br />U kunt ook met uw
        orderbevestiging producten ophalen die u online bij ons heeft besteld.
      </p>
      <div className={Style.Marktkaarten__LayoutCards}>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Maandag </h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Logo}
            alt="Geen Markt"
          ></img>
          <p className={Style.Marktkaarten__GeenmarktTXT}>
            Op dit moment hebben wij geen Markt op Maandag
          </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Dinsdag</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Logo}
            alt="Geen Markt"
          ></img>
          <p className={Style.Marktkaarten__GeenmarktTXT}>
            Op dit moment hebben wij geen Markt op Dinsdag
          </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Woensdag Hilversum</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Hilversum}
            alt="Markt Hilversum"
          ></img>
          <h5>adres:</h5>
          <p> Langgewenst 14, 1211 BB Hilversum</p>
          <h5>Openingstijden:</h5>
          <p>08:00 tot 16:00uur </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Donderdag Doorn</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Doorn}
            alt="Markt Doorn"
          ></img>
          <h5>adres:</h5>
          <p> Kampweg , 3941 HG Doorn</p>
          <h5>Openingstijden:</h5>
          <p>08:30 tot 13:00uur </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Vrijdag Bilthoven</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Hilversum}
            alt="Markt Bilthoven"
          ></img>
          <h5>adres:</h5>
          <p> Planetenbaan 2, 3721 LA Bilthoven</p>
          <h5>Openingstijden:</h5>
          <p>09:00 tot 15:00uur </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Zaterdag Zeist</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Zeist}
            alt="Markt zeist"
          ></img>
          <h5>adres:</h5>
          <p> Weeshuislaan 40, 3701 JX Zeist</p>
          <h5>Openingstijden:</h5>
          <p>08:30 tot 16:30uur </p>
        </div>
        <div className={Style.Marktkaarten__Cards}>
          <h5>Zondag</h5>
          <img
            className={Style.Marktkaarten__picture}
            src={Logo}
            alt="Geen Markt"
          ></img>
          <p className={Style.Marktkaarten__GeenmarktTXT}>
            Op dit moment hebben wij geen Markt op Zondag
          </p>
        </div>
      </div>
    </div>
  );
}
export default Marktkaarten;
