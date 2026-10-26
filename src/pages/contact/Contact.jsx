
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact1">
      <p className="contact2">
        Home <span>/</span> <b>Contact</b>
      </p>

      <div className="contact3">
        <div className="contact4">
          <div className="contact5">
            <div className="contact6">
              <FaPhone />
            </div>
            <h3>Call To Us</h3>
          </div>

          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>

          <hr />

          <div className="contact5">
            <div className="contact6">
              <FaEnvelope />
            </div>
            <h3>Write To US</h3>
          </div>

          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>

        <form className="contact7">
          <div className="contact8">
            <input
              type="text"
              placeholder="Your Name *"
              required
            />

            <input
              type="email"
              placeholder="Your Email *"
              required
            />

            <input
              type="tel"
              placeholder="Your Phone *"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            required
          ></textarea>

          <div className="contact9">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
