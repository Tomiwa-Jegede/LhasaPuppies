import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer_Component = () => {
  const handleClick = () => {
    const phoneNum = '09166635320';
    const message =
      'Hello FrontendIQ\nI saw the site You Created for Jegedekennel,i am interested in creating a site to, can i get more info';
    const enCodedMessage = encodeURIComponent(message);
    const whatsApp = `https://wa.me/${phoneNum}?text=${enCodedMessage}`;
    window.open(whatsApp, '_blank');
  };
  return (
    <div id='footer' className="bg-primary-color p-[1rem] text-[#000000ba]">
      <ul className="py-[1.5rem]">
        <li className="my-[1rem] flex flex-col text-[1.1rem]">
          <span className="mb-[.5rem] text-[1.3rem] text-white border-b w-fit">
            Copyright Notice
          </span>
          <span>
            &copy; 2025 JegedeKennel. All rights reserved. We spread love and
            loyalty.
          </span>
        </li>
          <li className="my-[1rem] flex flex-col text-[1.1rem]">
          <span className="mb-[.5rem] text-[1.3rem] text-white border-b w-fit">
            Social Media
          </span>
          <span className="flex w-[5rem] justify-between text-[2rem]">
            <a href="https://www.instagram.com/jegedekennel?igsh=ZzM0N3prNG5iNjB0">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/09166635320">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </span>
        </li>
        <li className="my-[1rem] flex flex-col text-[1.1rem]">
          <span className="mb-[.5rem] text-[1.3rem] text-white border-b w-fit">
            Adoption Process Steps
          </span>
          <span>(1) Choose your puppy</span>
          <span>(2) Contact us on WhatsApp</span>
          <span>(3) Schedule pickup or delivery</span>
        </li>
      
        <li className="my-[1rem] flex flex-col text-[1.1rem]">
          <span className="mb-[.5rem] text-[1.3rem] text-white border-b w-fit">
            Contact Information
          </span>
          <span>Location:Iyana Ipaja,Lagos</span>
          <span>Phone: +2349166635320</span>
          <span>WhatsApp: Available anytime for inquiries</span>
        </li>
        <li className="flex items-center justify-center p-2">
          Developed by{' '}
          <button
            onClick={() => {
              handleClick();
            }}
          >
            <span className="px-1 text-white">
              <u>FrontendIQ</u>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer_Component;
