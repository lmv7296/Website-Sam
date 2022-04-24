import React from "react";
import Styles from "./Contact.module.css";
import Logo from "../Media/GiftsAndMoreBySam-logos_white.png";
function Contact() {
  return (
    <div className={Styles.Contact__TEST}>
      <img src={Logo} alt="logo"></img>
      <div className={Styles.Contact__FirstDiv}>
        <h1>Contact</h1>
        <div className={Styles.Contact__container}>
          <form action="https://formsubmit.co/lmv7296@gmail.com" method="POST">
            <div className={Styles.Contact__TextField}>
              <input
                type="text"
                name="name"
                placeholder="Uw Naam"
                required
                minlength="1"
              />
            </div>
            <div className={Styles.Contact__TextField}>
              <input
                type="email"
                className={Styles.Contact__Email}
                name="email"
                placeholder="Uw Email"
                required
              />
            </div>
            <div className={Styles.Contact__TextField}>
              <textarea
                className={Styles.Contact__MessageField}
                placeholder="Hier kunt u het schrijfen"
                required
                minlength="6"
              ></textarea>
            </div>
            <input
              type="hidden"
              name="_next"
              value="/Giftandmorebysam/Contact"
            />
            <div class="status"></div>
            <input
              type="text"
              className={Styles.Contact__Hide}
              name="_honey"
            ></input>
            <input
              className={Styles.Contact__Hide}
              type="hidden"
              name="_captcha"
              value="false"
            ></input>
            <div class="Submitandtext">
              <button type="submit" className={Styles.Contact__SubmitButton}>
                versturen
              </button>
              <div class="buttonforquestion">
                <p class="Reactie">
                  U krijgt automatisch binnen 24 uur een confirmatie email
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
