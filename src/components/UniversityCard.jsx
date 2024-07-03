import React, { useRef } from 'react';
import { toJpeg } from 'html-to-image';
import download from 'downloadjs';

const UniversityCard = ({ university }) => {
   const cardRef = useRef();

   const handleDownload = () => {
      if (cardRef.current) {
         toJpeg(cardRef.current, { quality: 0.95 }).then((dataUrl) => {
            download(dataUrl, `${university.name}.jpeg`);
         });
      }
   };

   return (
      <div className="university-card" ref={cardRef}>
         <h3>{university.name}</h3>
         <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
            {university.web_pages[0]}
         </a>
         <button onClick={handleDownload}>Download as JPEG</button>
      </div>
   );
};

export default UniversityCard;
