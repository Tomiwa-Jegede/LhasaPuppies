import React from 'react';
import Header_Component from './Header_Component';
import Button_Component from './Button_Component';
import { faArrowRight, faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Landing_Page = () => {
  return (
    <>
      {/* landing page container */}
      <div className="Landing_Page_Container relative h-[100dvh] bg-[url(src/assets/lhasa-bg.jpg)] before:absolute before:inset-0 before:bg-black before:opacity-[0.4] before:content-['']">
        {/* header component */}
        <Header_Component />
        {/* heading */}
        <div className="relative flex h-[100dvh] flex-col items-center justify-center text-white">
          <div className="mb-[1rem] text-center text-[2.6rem]">
            Adorable <br />
            <span className="bg-primary-color inline-block rotate-[8deg] rounded-[3rem] p-2">
              Lhasa Apso Puppies
            </span>
            <br />
            Raised with Love
          </div>
          {/* sub-heading */}
          <div className="mb-[1rem] text-center text-[1rem]">
            Purebred.Ready to bring joy into your life.
          </div>
          {/* Button Component */}
          <div className="flex w-full items-center justify-around p-[1rem] px-[1rem]">
            <Link to="view_puppies">
              <Button_Component
                label="View Puppies"
                symbole={<FontAwesomeIcon icon={faPaw} />}
              />
            </Link>
            <Link to="/learn_more">
              <Button_Component
                label="Learn More"
                symbole={<FontAwesomeIcon icon={faArrowRight} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_Page;
