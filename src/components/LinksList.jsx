import React from "react";
import '../styles/LinksList.css';
import ListElement from "./ListElement";

function LinksList({ groupTitle, groupType }){

  // LIST OF MY LINKS
  const listOfLinks = [
    {
      type: 'job',
      links: {
        github: {
          name: 'github',
          url: 'https://github.com',
          desc: 'Da una vuelta por mis repositorios.',
          icon: 'TfiGithub'
        },
        linkedIn: {
          name: 'LinkedIn',
          url: '#url',
          desc: '¿Quieres conocer mi trayectoria laboral completa? ¡Aquí es donde!',
          icon: 'TfiLinkedin'
        }
      }
    },
    {
      type: 'social',
      links: {
        instagram: {
          name: 'instagram',
          url: 'https://github.com',
          desc: 'Un poco de mi vida en las redes sociales',
          icon: 'TfiInstagram ',
        },
      }
    },
    {
      type: 'contact',
      links: {
        instagram: {
          name: 'Gmail',
          url: "mailto:irojas.h25@gmail.com",
          desc: 'Háblame directamente a través de un correo',
          icon: 'TfiEmail',
        },
      }
    }
  ];

  const loadLinksFromGroup = () => {
    // LOOK FOR LIST COINCIDENCES
    const filteredList = listOfLinks.filter(list => list.type == groupType);
    const listToDisplay = [];

    // IF ANY COINCIDENCE IS FOUND, RENDER IT
    if (filteredList.length > 0) {
      for (const [key, value] of Object.entries(filteredList[0].links)){

        listToDisplay.push(
          <ListElement key={key}
            name={value.name}
            url={value.url}
            desc={value.desc}
            icon={value.icon}
          />
        );
      }
      return listToDisplay;
    }
  };

  return (
    <div className='links-list show'>
      {
        // HIDE TITLE IF NOTHING IS FOUND
        (loadLinksFromGroup() ? (<h2>{groupTitle}</h2>) : (''))
      }
      { 
        // LOAD COMPONENTS
        loadLinksFromGroup() 
      }
    </div>
  );
}

export default LinksList;