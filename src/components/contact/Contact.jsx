import "./contact.scss";
import Mailer from "../mailer/Mailer";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Mailer />
    </div>
  );
}
