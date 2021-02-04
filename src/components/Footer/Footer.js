import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Contact us: <a href="mailto:info@sport-source.com">info@sport-source.com</a>.
      </p>
      <p className="footer__copyright">&copy; {new Date().getFullYear()} Sports Source.</p>
      <p className="footer__text">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
