import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faBars,
  faDog,
  faHome,
  faPaw,
  faPhone,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header_Component = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(true);
  const [title, setTitle] = useState();
  useEffect(() => {
    if (location.pathname === '/learn_more') {
      setTitle('About');
    } else if (location.pathname === '/view_puppies') {
      setTitle('Puppies');
    } else {
      setTitle('Lhasa Apso');
    }
  }, [location]);
  const handleClick = () => {
    setHidden((prev) => !prev);
  };
  const handleBack = () => {
    window.history.go(-1);
  };
  return (
    <div className="text-primary-color fixed z-[1000] w-full border-b border-b-[#e6e3e3] bg-[#ffffff] p-4 text-[1.2rem]">
      <div className="Header_Container flex items-center justify-between">
        <div className="logo flex items-center justify-between">
          {location.pathname !== '/' ? (
            <button
            className='mr-[1rem]'
              onClick={() => {
                handleBack();
              }}
            >
             
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          ) : (
            <img
              className="mr-[1rem] h-[2.5rem] w-[2.5rem] rounded-[3rem]"
              src="src/assets/logo(jegedekennel).png"
              alt=""
            />
          )}{' '}
          {title}
        </div>
        {/* menu */}
        <div
          onClick={() => {
            handleClick();
          }}
          className="menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Drop-Down */}
        <div
          className={`${hidden ? 'w-0' : 'w-[50%]'} DropDown bg-primary-color absolute top-0 right-0 rounded-bl-[10px] text-white transition-all duration-500`}
        >
          <ul className="relative p-5 pt-[4rem] pr-[5rem]">
            <li onClick={handleClick} className="absolute top-3 right-5">
              <FontAwesomeIcon icon={faXmark} />
            </li>
            <Link to="/">
              <li
                onClick={() => {
                  setHidden(true);
                }}
                className="mb-[4rem] w-[6rem]"
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </li>
            </Link>
            <Link to="/learn_more">
              <li
                onClick={() => {
                  setHidden(true);
                }}
                className="mb-[4rem] w-[6rem]"
              >
                <FontAwesomeIcon icon={faPaw} /> About
              </li>
            </Link>
            <Link to="/view_puppies">
              <li
                onClick={() => {
                  setHidden(true);
                }}
                className="mb-[4rem] w-[10rem]"
              >
                <FontAwesomeIcon icon={faDog} /> Puppies
              </li>
            </Link>
            <li
              onClick={() => {
                setHidden(true);
              }}
              className="mb-[4rem] w-[6rem]"
            >
              <a href="#footer"><FontAwesomeIcon icon={faPhone} /> Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header_Component;
