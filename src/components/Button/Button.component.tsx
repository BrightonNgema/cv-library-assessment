import Image from 'next/image';
import React from 'react';

type Props = {
  title:string;
  onClick?: () => void;
};

export const Button = ({title, onClick }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      <div>{title}</div>
      <div className="icon">
        <Image src={"/search.svg"} alt={'search-icon-cv-libary'} width={18} height={18}/>
      </div>
    </button>
  );
}
