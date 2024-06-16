import React from 'react';
type LayoutProps = {
  text: string;
};
const Button = ({ text }: LayoutProps) => {
  return (
    <button className="bg-secondary text-white hover:text-blue-700 py-2 px-4 rounded-lg">
      {text}
    </button>
  )
}

export default Button
