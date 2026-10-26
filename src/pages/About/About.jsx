
import React from "react";
import {
  FaStore,
  FaDollarSign,
  FaGift,
  FaMoneyBillWave,
  FaTruckFast,
  FaHeadphones,
  FaShieldHalved,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";

import story from "../../assets/aimg1.png";
import person1 from "../../assets/aimg2.png";
import person2 from "../../assets/aimg3.png";
import person3 from "../../assets/aimg4.png";

import "./about.css";

function About() {
  return (
    <div className="about1">

      <p className="about2">Home / <span>About</span></p>

      <div className="about3">
        <div className="about4">
          <h1>Our Story</h1>

          <p>
            Launched in 2010, Exclusive is South Asia's premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of marketing, meeting and service
            solutions, Exclusive has 10,500 sellers and 300 brands and
            serves 3 million customers across the region.
          </p>

          <p>
            Exclusive has more than 1 Million products to offer,
            growing at a very fast pace. Exclusive offers a diverse
            assortment in categories ranging from consumer.
          </p>
        </div>

        <img className="about5" src={story} alt="Shopping" />
      </div>

      <div className="about6">
        <div className="about7">
          <FaStore />
          <h2>10.5k</h2>
          <p>Sellers active our site</p>
        </div>

        <div className="about7 active">
          <FaDollarSign />
          <h2>33k</h2>
          <p>Monthly Product Sale</p>
        </div>

        <div className="about7">
          <FaGift />
          <h2>45.5k</h2>
          <p>Customer active in our site</p>
        </div>

        <div className="about7">
          <FaMoneyBillWave />
          <h2>25k</h2>
          <p>Annual gross sale in our site</p>
        </div>
      </div>

      <div className="about8">
        <div className="about9">
          <img src={person1} alt="Tom Cruise" />
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="about10">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="about9">
          <img src={person2} alt="Emma Watson" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className="about10">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="about9">
          <img src={person3} alt="Will Smith" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className="about10">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="about11">
        <span></span>
        <span></span>
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>

      <div className="about12">
        <div>
          <section><FaTruckFast /></section>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div>
          <section><FaHeadphones /></section>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div>
          <section><FaShieldHalved /></section>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>

    </div>
  );
}

export default About;
