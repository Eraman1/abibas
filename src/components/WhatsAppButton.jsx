import React from "react";

function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/918123254305" // Replace with your WhatsApp number (include country code without '+' or '-')
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default WhatsAppButton;
