import React, { useState, ReactElement, ReactNode } from "react";
import { getCardStyle } from "../../../helpers/getCardStyle";

import NextIcon from "../../assets/NextIcon.svg?react";
import PrevIcon from "../../assets/PrevIcon.svg?react";

import type { ICardProps, ICarouselProps } from "./@types";

import classes from "./InteractiveGallery.module.css";

const CARDS = 10;

const Card = ({ title, content, price }: ICardProps): ReactElement => (
  <div className={classes.card}>
    <h2>{title}</h2>
    <p style={{ textAlign: "center", maxWidth: "300px" }}>{content}</p>
    <p>Цены</p>
    <p>от {price}</p>
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

const Carousel = ({ children }: ICarouselProps): ReactElement => {
  const [active, setActive] = useState<number>(0);
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
        <div className={classes["card-container"]} style={getCardStyle({ isActive: i === active, offset: active - i })}>
          {child}
        </div>
      ))}
    </div>
  );
};

export const InteractiveGallery = (): ReactElement => (
  <Carousel>
    {[...Array(CARDS)].map((_, i: number) => (
      <Card
        key={i}
        title="Удаление вмятин"
        content="Удалениe вмятин с использованием специального инструмента без покраски кузовного элемента (технология pdr)"
        price="4000р"
      />
    ))}
  </Carousel>
);
