import React from 'react';

const Button_Component = ({ label, symbole }) => {
  return (
    <button className="bg-primary-color rounded-[2rem] py-3 w-[11rem] px-[1rem] text-[1.2rem] flex items-center justify-between">
      {label}{symbole}
    </button>
  );
};

export default Button_Component;
