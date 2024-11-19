import React, { useState, ReactElement, ReactNode } from "react";
import { getCardStyle } from "../../../helpers/getCardStyle";

import NextIcon from "../../assets/NextIcon.svg?react";
import PrevIcon from "../../assets/PrevIcon.svg?react";

import type { ICardProps, ICarouselProps } from "./@types";

import classes from "./InteractiveGallery.module.css";
import {CARDS} from './constants'

const formatPrice = (price: number): string => {
    return price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 0 }) + ' ₽';
};


const Card = ({ title, content, price, isActive }: ICardProps): ReactElement => (
  <div className={classes.card} style={{
    border: isActive ? '1px solid #d90c0c' : '',
  }}>
    {/* <h2>{title}</h2> */}
    <p 
    style={{ 
      textAlign: "center", 
      maxWidth: "300px", 
      fontWeight: "bold", 
      fontSize: "1.2rem", 
      color:'#d90c0c'
       }}
       >{title}</p>
    <p>{price && <>Цена: {formatPrice(Number(price))}</>}</p>
    {/* <p>{price}</p> */}
  </div>
);

const NavigationButton = ({
  icon,
  onClick,
  className,
}: {
  icon: ReactNode;
  onClick: () => void;
  className: string;
}): ReactElement => (
  <button className={className} onClick={onClick}>
    {icon}
  </button>
);

const Carousel = ({ children, active, setActive }: ICarouselProps): ReactElement => {
  const count: number = React.Children.count(children);

  const handleNext = (): void => {
    if (active < count - 1) {
      setActive(i => i + 1);
    }
  };

  const handlePrev = (): void => {
    if (active > 0) {
      setActive(i => i - 1);
    }
  };

  return (
    <div className={classes.carousel}>
      {active > 0 && (
        <NavigationButton icon={<PrevIcon />} onClick={handlePrev} className={`${classes.nav} ${classes.left}`} />
      )}
      {active < count - 1 && (
        <NavigationButton icon={<NextIcon />} onClick={handleNext} className={`${classes.nav} ${classes.right}`} />
      )}
      {React.Children.map(children, (child: ReactNode, i: number) => (
        <div
         className={classes["card-container"]} 
         style={getCardStyle({ isActive: i === active, offset: active - i })}
         >
          {child}
        </div>
      ))}
    </div>
  );
};

export const InteractiveGallery = (): ReactElement => {
    const [active, setActive] = useState<number>(1);

 return  <Carousel active={active} setActive={setActive}>
    {CARDS.map(({price, name}, i: number) => (
      <Card
        key={i}
        isActive={active === i}
        title={name}
        content={''}
        price={price}
      />
    ))}
  </Carousel>
};
