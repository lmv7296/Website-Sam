import react from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../Media/GiftsAndMoreBySam-logos_transparent.png";

function Footer() {
  return (
    <footer>
      <div className={styles.Footer__Footer}>
        <div className={styles.footer__Informatie}>
          <a
            className={styles.footer__InformatieForOne}
            href="../informatie/nl_nl_2_Algemene Voorwaarden.pdf"
          >
            Algemene Voorwaarden
          </a>
          <a
            className={styles.footer__InformatieForOne}
            href="../informatie/nl_nl_1_Privacyverklaring-giftenmorebysam.pdf"
          >
            privacy verklaring
          </a>
          <a
            className={styles.footer__InformatieForOne}
            href="../informatie/nl_nl_3_retour beleid.pdf"
          >
            Retourbeleid
          </a>
          <a
            className={styles.footer__InformatieForOne}
            href="../informatie/nl_nl_5_levering.pdf"
          >
            Levertijd en Verzendkosten{" "}
          </a>
          <a
            className={styles.footer__InformatieForOne}
            href="../informatie/nl_nl_4_HERROEPINGSRECHT.pdf"
          >
            Heroepingsrecht
          </a>
          <div className={styles.Footer__Links}>
            <Link to="/Giftandmorebysam/Contact">
              <p className={styles.Footer__Link}>Contact</p>
            </Link>
            <Link to="/Giftandmorebysam/Overons">
              <p className={styles.Footer__Link}>Overons</p>
            </Link>
          </div>
        </div>
        <img className={styles.Footer__Logo} src={Logo} alt="Logo"></img>
        <div className={styles.Footer__NewsLetter}>
          <h3>Nieuwsbrief</h3>
          <form>
            <div className={styles.Footer__NewsLetter_form}>
              <input
                className={styles.Footer__NewsLetter_Imput}
                type="email"
                placeholder="Uw email addres"
                required
              ></input>
              <button
                className={styles.Footer__NewsLetter_Button}
                type="submit"
              >
                <ArrowForwardIcon />
              </button>
            </div>
            <div className={styles.Footer__Socialmedia}>
              <a
                className={styles.Footer__Socialmedia_visited}
                href="https://www.facebook.com/pages/category/Gift-Shop/Gift-More-By-Sam-1846780352249439/"
              >
                <FacebookIcon />
              </a>
              <a
                className={styles.Footer__Socialmedia_visited}
                href="https://www.instagram.com/gift.enmorebysam/"
              >
                <InstagramIcon />
              </a>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
