import "./contact.scss";
import Mailer from "../mailer/Mailer";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="contact" id="contact">
        <div className="left">
          <h1>
            Let's get <br></br>
            in touch...
          </h1>
        </div>
        <div className="right">
          <Mailer />
        </div>
      </div>
      <div className="footer">
        <p>2021 - Malix - All rights reserved</p>
      </div>
    </div>
  );
}
