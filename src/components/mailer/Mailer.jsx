import emailjs from "emailjs-com";

export default function Mailer() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_88utl04",
        "template_ntn2ach",
        e.target,
        "user_6vn32rf2ZHU3BbrsJ51Jw"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <input className="name" name="name" placeholder="Your name" />
        <input className="email" name="email" placeholder="Your e-mail" />
        <input className="subject" name="subject" placeholder="Subject" />
        <textarea
          className="message"
          name="message"
          placeholder="What's in your mind?"
          rows="4"
        />
        <input className="submit" name="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}
