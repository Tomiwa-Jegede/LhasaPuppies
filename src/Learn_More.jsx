import React, { useContext } from 'react';
import { SliderContent } from './content';
import SliderBtn from './SliderBtn';
import SliderNav from './SliderNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faDna,
  faHeart,
  faScissors,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

const Learn_More = () => {
  const { imageList, setWidth, imageRef } = useContext(SliderContent);

  return (
    <div className="flex flex-col items-center p-3 pt-[4rem]">
      {/* header-01 */}
      <h1 className="text-primary-color w-full text-[2rem]">
        About Lhasa Apso
      </h1>
      <div className="slider-container relative mb-[2rem] flex w-[385px] items-center overflow-hidden rounded-[5px] text-white">
        {/* Nav button */}
        <SliderBtn />
        {/* currentIndex */}
        <SliderNav />
        {/* slider */}
        <div className="flex w-full" ref={imageRef}>
          {imageList.map((img, index) => (
            <img
              key={index}
              className="h-full w-full object-cover"
              src={img}
              alt=""
              onLoad={(e) => {
                if (index === 0) {
                  setWidth(e.target.clientWidth);
                }
              }}
            />
          ))}
        </div>
      </div>
      {/* body-01 */}
      <p className="mb-[3rem] w-full text-[1.1rem]">
        The <span className="text-primary-color text-[1.2rem]">Lhasa Apso</span>{' '}
        is a small but sturdy dog breed originally from Tibet, where it was bred
        to be a sentinel dog in Buddhist monasteries. Despite their{' '}
        <span className="text-primary-color text-[1.2rem]">small size</span>,
        these dogs have a{' '}
        <span className="text-primary-color text-[1.2rem]">
          big personality
        </span>{' '}
        — combining{' '}
        <span className="text-primary-color text-[1.2rem]">elegance</span> with
        a touch of{' '}
        <span className="ttext-[1.2rem] ext-primary-color">independece</span>{' '}
        and <span className="text-primary-color text-[1.2rem]">boldness</span>.
      </p>
      {/* header-02 */}
      <h1 className="text-primary-color mb-[1rem] w-full border-b text-[2rem]">
        <FontAwesomeIcon icon={faScroll} /> Breed History
      </h1>
      {/* body-02 */}
      <div className="mb-[2rem] w-full text-[1.1rem]">
        <ul className="list-outside list-disc pl-5">
          <li className="pb-3">
            <span className="text-primary-color text-[1.2rem]">Origin:</span>
            <span> Tibet (over 1,000 years ago)</span>
          </li>
          <li className="pb-3">
            <span className="text-primary-color text-[1.2rem]">Role:</span>
            <span> Guard dogs for palaces and monasteries</span>
          </li>
          <li className="pb-4">
            <span className="text-primary-color text-[1.2rem]">
              Name Meaning:
            </span>
            <span>
              “Lhasa” comes from Tibet's capital, and “Apso” roughly means
              “long-haired dog”
            </span>
          </li>
        </ul>
        <p>
          Lhasas were considered so sacred that they were never sold, only given
          as gifts — often by the Dalai Lama{' '}
          <span className="text-primary-color">
            (spiritual leader of Tibetan Buddhism, specifically the Gelug
            school)
          </span>{' '}
          himself.
        </p>
      </div>

      {/* header-03 */}
      <h1 className="text-primary-color mb-[1rem] w-full border-b text-[2rem]">
        <FontAwesomeIcon icon={faDna} /> Breed Characteristics
      </h1>
      {/* body-03 */}
      <div className="mb-[2rem] w-full">
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Size</p>
          <p>Small (10-11 inches tall, 12-18 pounds)</p>
        </div>
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Coat</p>
          <p>Long, dense, and straight — requires grooming</p>
        </div>
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Lifespan</p>
          <p>12-15 years (some live even longer!)</p>
        </div>
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Temprament</p>
          <p>Loyal, confident, alert, independent</p>
        </div>
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Energy Level</p>
          <p>Moderate — playful but not hyper</p>
        </div>
        <div className="grid grid-cols-2 border border-[#dfdddd]">
          <p className="text-primary-color text-[1.2rem]">Good With</p>
          <p>Families, singles, apartments, older children</p>
        </div>
      </div>
      {/* header-04 */}
      <h1 className="text-primary-color mb-[1rem] w-full border-b text-[2rem]">
        <FontAwesomeIcon icon={faBrain} /> Personality
      </h1>
      {/* body-04 */}
      <div className="w-full pb-[2rem] text-[1.1rem]">
        <p className="text-primary-color">
          Lhasa Apsos are often described as:
        </p>
        <ul className="list-outside list-disc py-[1rem] pl-5">
          <li className="pb-2">
            <span className="text-primary-color">Loyal</span> and attached to
            their humans
          </li>
          <li className="pb-2">
            {' '}
            A little{' '}
            <span className="text-primary-color">wary of strangers</span> —
            excellent watchdogs
          </li>
          <li className="pb-2">
            <span className="text-primary-color">Stubborn but smart</span>— they
            learn quickly when it suits them!
          </li>
          <li className="pb-2">
            <span className="text-primary-color">Affectionate</span>
            with people they trust
          </li>
        </ul>
        <p>
          They're not needy or clingy like some small dogs, but they love to be
          near their owners and make excellent companions.
        </p>
      </div>
      {/* header-05 */}
        <h1 className="text-primary-color mb-[1rem] w-full border-b text-[2rem]">
          <FontAwesomeIcon icon={faScissors} /> Grooming
        </h1>
      {/* body-05 */}
      <div className="w-full text-[1.1rem]">
      
        <ul className="list-outside list-disc py-[1rem] pl-5">
          <li className="pb-2">
            Their long coat needs{' '}
            <span className="text-primary-color">regular brushing</span> (2-3
            times a week minimum)
          </li>
          <li className="pb-2">
            Many owners choose to keep it trimmed in a{' '}
            <span className="text-primary-color">“puppy cut”</span> for easier
            care
          </li>
          <li className="pb-2">
            Routine grooming helps prevent tangles and keeps them looking shar
          </li>
        </ul>
      </div>
      {/* body-06 */}
      <div className="w-full text-[1.1rem]">
        <h1 className="text-primary-color mb-[1rem] w-full border-b text-[2rem]">
          <FontAwesomeIcon icon={faHeart} /> Why People Love Lhasa
        </h1>
        <ul className="list-outside list-disc py-[1rem] pl-5">
          <li className="pb-2">Compact and great for apartments</li>
          <li className="pb-2">Unique mix of dignity and goofiness</li>
          <li className="pb-2">
            Don't shed much (great for allergy-sensitive homes)
          </li>
          <li className="pb-2">
            Make loyal and sometimes hilarious companions
          </li>
        </ul>
        <p>
          The Lhasa Apso is like a tiny guardian with a royal soul — confident,
          wise, and always watching. If you want a small dog with a strong sense
          of character and loyalty, the Lhasa Apso might just be the perfect
          match.
        </p>
      </div>
    </div>
  );
};

export default Learn_More;
