import React from 'react';

interface BoxProps {
  size: number;
  bgColor: string;
  radius?: number;
}

const Box = ({ size, bgColor, radius }: BoxProps) => {
  const style = {
    display: 'block',
    width: size,
    height: size,
    backgroundColor: bgColor,
    borderRadius: radius,
    color: 'white',
  };
  return <div style={style} />;
};

export default Box;
