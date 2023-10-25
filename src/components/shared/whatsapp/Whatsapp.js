import React from 'react'
import "./Whatsapp.css"

function Whatsapp({phone}) {
    const whatsappNumber = phone;

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
      };
  return (
    <div className='whatsapp-icon'>
      <button onClick={handleWhatsAppClick} className="whatsapp-button">
        <i class="fa-brands fa-whatsapp"></i>
      </button>
    </div>
  )
}

export default Whatsapp
