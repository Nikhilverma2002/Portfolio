import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartoon from "../images/cartoon2.png";

export default function ContactForm({ id }) {
  const form = useRef();
  const [result, setResult] = React.useState("Send Message");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "94d44694-63f2-41b9-96d5-7eeb87be6182");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message sent successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      event.target.reset();
    } else {
      toast.error("Failed to send message. Kindly refresh the page.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setResult(data.message);
    }
  };

  return (
    <div className="contact-window" id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img
          src={cartoon}
          alt="Nikhil Verma"
          className="contact-wrapper-left"
        ></img>
        <form ref={form} onSubmit={onSubmit} className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            column="15"
            placeholder="Share your thoughts and insights here to connect..."
            required
          />
          <button className="btn" id="submitBtn" type="submit" value="Send">
            {result}
          </button>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
}