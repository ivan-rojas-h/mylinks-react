import React from "react";
import '../styles/ListElement.css'
import { TfiGithub, TfiLinkedin, TfiInstagram, TfiTwitterAlt, TfiEmail } from "react-icons/tfi";

const iconList = {
  'TfiGithub' : <TfiGithub />,
  'TfiLinkedin' : <TfiLinkedin />,
  'TfiInstagram ' : <TfiInstagram />,
  'TfiTwitterAlt' : <TfiTwitterAlt />,
  'TfiEmail' : <TfiEmail />
}

function ListElement({ name, url, desc, icon }) {
  const iconToDisplay = iconList[icon];
  return (
    <a href={url} target='_blank' rel="noreferrer">
      <div className='list-element'>
          <span className='list-element-icon' >{iconToDisplay}</span>
          <span>
            <h3>{name}</h3>
            <p>{desc}</p>
          </span>
      </div>
    </a>
  );
}

export default ListElement;