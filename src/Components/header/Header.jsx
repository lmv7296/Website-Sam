import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../Media/GiftsAndMoreBySam-logos_transparent.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <header>
      <div className={styles.header__Text}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.header__Logo} />
        </Link>
        <div className={styles.header__LinkText}>
          <Link to="/Giftandmorebysam/Producten">
            <h4 className={styles.header__Links}>Producten</h4>
          </Link>
          <Link to="/Giftandmorebysam/Markten">
            <h4 className={styles.header__Links}>Markten</h4>
          </Link>
          <Link to="/Giftandmorebysam/Contact">
            <h4 className={styles.header__Links}>Contact</h4>
          </Link>
          <Link to="/Giftandmorebysam/Overons">
            <h4 className={styles.header__Links}>Over ons</h4>
          </Link>
        </div>
        <div>
          <Link to="/GiftandmorebySam/winkelmandje">
            <ShoppingCartOutlinedIcon
              className={styles.header__ShopingCartandLogin}
            />
          </Link>
        </div>
        <div>
          <Link to="/GiftandmorebySam/Login">
            <h4 className={styles.header__ShopingCartandLogin}>Login</h4>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
