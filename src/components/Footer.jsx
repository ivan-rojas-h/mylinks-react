import React from 'react';
import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear();
  return (<div className='footer'>
    <p><strong>{year} kivaN by IVAN ROJAS</strong>. My journey as a developer is just starting.</p>
  </div>);
}

export default Footer;