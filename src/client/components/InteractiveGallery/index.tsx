import React, { ReactNode, useState } from "react";
import NextIcon from "../../assets/NextIcon.svg?react";
import PrevIcon from "../../assets/PrevIcon.svg?react";
import classes from "./InteractiveGallery.module.css";

const CARDS = 10;
const MAX_VISIBILITY = 3;

interface CardProps {
  title: string;
  content: string;
  price: string;
}

const Card = ({ title, content, price }: CardProps) => (
  <div className={classes.card}>
    <h2>{title}</h2>
    <p style={{ textAlign: "center", maxWidth: "300px" }}>{content}</p>
    <p>Цены</p>
    <p>от {price}</p>
  </div>
);

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const handleNext = () => {
    if (active < count - 1) {
      setActive(i => i + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(i => i - 1);
    }
  };

  return (
    <div className={classes.carousel}>
      {active > 0 && (
        <button className={`${classes.nav} ${classes.left}`} onClick={handlePrev}>
          <PrevIcon />
        </button>
      )}
      {active < count - 1 && (
        <button className={`${classes.nav} ${classes.right}`} onClick={handleNext}>
          <NextIcon />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className={classes["card-container"]}
          style={
            {
              "--active": i === active ? 1 : 0.7,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "--z-index": i === active ? -1 : 0,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0.3" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              margin: i !== active ? "10px" : "",
              marginTop: i !== active ? "-100px" : "",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export const InteractiveGallery = () => {
  return (
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card
          key={i}
          title="Удаление вмятин"
          content="Удаление вмятин с использованием специального инструмента без покраски кузовного элемента (технология pdr)"
          price="4000р"
        />
      ))}
    </Carousel>
  );
};
