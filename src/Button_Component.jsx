import React from 'react';

const Button_Component = ({ label, symbole, onClick,  }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-color flex w-[10rem] items-center justify-between rounded-[2rem] px-[1rem] py-3 text-[1rem]"
    >
      {label}
      {symbole}
    </button>
  );
};

export default Button_Component;
