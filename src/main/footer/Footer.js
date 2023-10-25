import React from "react";
import "./Footer.css"
import Whatsapp from "../../components/shared/whatsapp/Whatsapp";

function Footer({phone}) {
  return (
    <>
    <Whatsapp phone={phone} />
    <div className="footer_bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyrights_text text-center">
              <p>© 2023 The Spa Space. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
