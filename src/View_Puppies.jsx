import React from 'react';
import lhasaVid from '/src/assets/puppies/lhasa.mp4';
import { puppies } from './puppies';
import Button_Component from './Button_Component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
const images = import.meta.glob('/src/assets/puppies/*.{jpeg,jpg,png}', {
  eager: true,
  import: 'default',
});
const View_Puppies = () => {
  const imageList = Object.values(images);
  const sendMessage = (id) => {
    puppies.find((puppy, index) => {
      if (index === id) {
        const phoneNum = '2349166635320';
        const message = `Hello Jegedekennel(${index})\nI am interested in this ${puppy.age} old ${puppy.sex} ${puppy.name}`;
        const enCodedMessage = encodeURIComponent(message);
        const whatsApp = `https://wa.me/${phoneNum}?text=${enCodedMessage}`;
        window.open(whatsApp, '_blank');
      }
    });
  };
  return (
    <>
      <div className="bg-light-primary-color h-[25rem] p-2 pt-[4.5rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-[10px] border object-cover"
          src={lhasaVid}
        ></video>
      </div>
      <div className="bg-light-primary-color grid grid-cols-2 gap-2 p-2">
        {puppies.map((puppy, index) => (
          <div key={index} className="w-fit rounded-[.5rem] bg-[#ffffff] p-2">
            <img className="rounded-[5px]" src={imageList[index]} alt="" />
            <ul className="my-[1rem]">
              <li>
                <span className="text-primary-color text-[1.2rem]">Sex:</span>
                <span> {puppy.sex}</span>
              </li>
              <li>
                <span className="text-primary-color text-[1.2rem]">Age:</span>
                <span> {puppy.age}</span>
              </li>
              <li>
                <span className="text-primary-color text-[1.2rem]">
                  Location:
                </span>
                <span> {puppy.location}</span>
              </li>
            </ul>
            <span className="text-white">
              <Button_Component
                id={index}
                onClick={() => {
                  sendMessage(index);
                }}
                label="Puppy info"
                symbole={<FontAwesomeIcon icon={faInfoCircle} />}
              />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default View_Puppies;
