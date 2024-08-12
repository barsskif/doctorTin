import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Box, Text, Button } from "@mantine/core";
import * as React from "react";
import React__default, { useState } from "react";
const input = "_input_14r8b_1";
const classes$6 = {
  input
};
const CustomInput = ({ placeholder, type = "text" }) => {
  return /* @__PURE__ */ jsx("input", { type, className: classes$6.input, placeholder });
};
const StrokeDigit = ({ digit, strokeWidth = 2, fontSize = 64 }) => {
  const numDigits = String(digit).length;
  const width = numDigits * (fontSize * 0.6);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width,
      height: fontSize,
      viewBox: `0 0 ${width} ${fontSize}`,
      fill: "none",
      stroke: "#fff",
      strokeWidth,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
          /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2", in: "SourceAlpha" }),
          /* @__PURE__ */ jsx("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
          /* @__PURE__ */ jsx("feComponentTransfer", { children: /* @__PURE__ */ jsx("feFuncA", { type: "linear", slope: "0.47" }) }),
          /* @__PURE__ */ jsxs("feMerge", { children: [
            /* @__PURE__ */ jsx("feMergeNode", {}),
            /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
          ] }),
          /* @__PURE__ */ jsx("feComposite", { operator: "over", in2: "SourceAlpha" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "text",
          {
            x: width / 2,
            y: fontSize / 2 + strokeWidth,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fontSize,
            filter: "url(#shadow)",
            children: digit
          }
        )
      ]
    }
  );
};
const About = "/assets/aboutBg-9a05895e.png";
const CARDS$1 = [
  {
    number: 5,
    text: "высококлассных специалистов, имеющих сертификаты"
  },
  {
    number: 927,
    text: "клиентов уже выбрали нас и остались довольны"
  },
  {
    number: 4,
    text: "года успешных работ по покраске"
  },
  {
    number: 6,
    text: "месяцев гарантии на все выполненные работы"
  }
];
const ABOUT_TEXT = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum
`;
const aboutWrapper = "_aboutWrapper_5yxas_1";
const aboutTextBlock = "_aboutTextBlock_5yxas_11";
const aboutImage = "_aboutImage_5yxas_19";
const boxContent$1 = "_boxContent_5yxas_28";
const card$1 = "_card_5yxas_40";
const cardText = "_cardText_5yxas_48";
const videoBlock = "_videoBlock_5yxas_55";
const aboutTextBlockDescroption = "_aboutTextBlockDescroption_5yxas_61";
const classes$5 = {
  aboutWrapper,
  aboutTextBlock,
  aboutImage,
  boxContent: boxContent$1,
  card: card$1,
  cardText,
  videoBlock,
  aboutTextBlockDescroption
};
const AboutBlock = () => {
  return /* @__PURE__ */ jsxs(Box, { className: classes$5.aboutWrapper, children: [
    /* @__PURE__ */ jsx("img", { src: About, className: classes$5.aboutImage }),
    /* @__PURE__ */ jsx(Box, { className: classes$5.boxContent, children: CARDS$1.map(({ number, text }) => /* @__PURE__ */ jsxs(Box, { className: classes$5.card, children: [
      /* @__PURE__ */ jsx(StrokeDigit, { digit: number }),
      /* @__PURE__ */ jsx(Text, { classNames: { root: classes$5.cardText }, children: text })
    ] }, number)) }),
    /* @__PURE__ */ jsxs(Box, { className: `${classes$5.boxContent} ${classes$5.videoBlock}`, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            display: "flex",
            width: "746px",
            height: "319px",
            background: "black"
          }
        }
      ),
      /* @__PURE__ */ jsxs(Box, { className: classes$5.aboutTextBlock, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            styles: {
              root: {
                fontSize: "20px",
                fontWeight: "bold"
              }
            },
            children: "О нас за 60 секунд"
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: classes$5.aboutTextBlockDescroption, styles: { root: { fontSize: "13px" } }, children: ABOUT_TEXT })
      ] })
    ] })
  ] });
};
const outServicessWrapper = "_outServicessWrapper_aslrl_1";
const classes$4 = {
  outServicessWrapper
};
const SvgNextIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 51, height: 52, viewBox: "0 0 51 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.75 25.9999C12.75 25.5689 12.9179 25.1556 13.2168 24.8509C13.5157 24.5461 13.9211 24.3749 14.3437 24.3749L32.8089 24.3749L25.9654 17.4004C25.8172 17.2493 25.6997 17.0699 25.6195 16.8725C25.5393 16.6751 25.498 16.4636 25.498 16.2499C25.498 16.0362 25.5393 15.8247 25.6195 15.6273C25.6997 15.4298 25.8172 15.2505 25.9654 15.0994C26.1136 14.9483 26.2895 14.8285 26.4831 14.7467C26.6767 14.6649 26.8842 14.6228 27.0937 14.6228C27.3033 14.6228 27.5108 14.6649 27.7044 14.7467C27.898 14.8285 28.0739 14.9483 28.2221 15.0994L37.7846 24.8494C37.933 25.0003 38.0508 25.1797 38.1311 25.3771C38.2115 25.5745 38.2528 25.7862 38.2528 25.9999C38.2528 26.2136 38.2115 26.4253 38.1311 26.6227C38.0508 26.8201 37.933 26.9995 37.7846 27.1504L28.2221 36.9004C28.0739 37.0515 27.898 37.1713 27.7044 37.2531C27.5108 37.3349 27.3033 37.377 27.0938 37.377C26.8842 37.377 26.6767 37.3349 26.4831 37.2531C26.2895 37.1713 26.1136 37.0515 25.9654 36.9004C25.6661 36.5953 25.498 36.1814 25.498 35.7499C25.498 35.5362 25.5393 35.3247 25.6195 35.1273C25.6997 34.9298 25.8172 34.7505 25.9654 34.5994L32.8089 27.6249L14.3437 27.6249C13.9211 27.6249 13.5157 27.4537 13.2168 27.1489C12.9179 26.8442 12.75 26.4309 12.75 25.9999Z", fill: "#808080" }));
const SvgPrevIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 51, height: 52, viewBox: "0 0 51 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.25 26.0001C38.25 26.4311 38.0821 26.8444 37.7832 27.1491C37.4843 27.4539 37.0789 27.6251 36.6562 27.6251L18.1911 27.6251L25.0346 34.5996C25.1828 34.7507 25.3003 34.93 25.3805 35.1275C25.4607 35.3249 25.502 35.5364 25.502 35.7501C25.502 35.9638 25.4607 36.1753 25.3805 36.3727C25.3003 36.5701 25.1828 36.7495 25.0346 36.9006C24.8864 37.0517 24.7105 37.1715 24.5169 37.2533C24.3233 37.3351 24.1158 37.3772 23.9062 37.3772C23.6967 37.3772 23.4892 37.3351 23.2956 37.2533C23.102 37.1715 22.9261 37.0517 22.7779 36.9006L13.2154 27.1506C13.067 26.9997 12.9492 26.8203 12.8689 26.6229C12.7885 26.4255 12.7471 26.2138 12.7471 26.0001C12.7471 25.7864 12.7885 25.5747 12.8689 25.3773C12.9492 25.1799 13.067 25.0005 13.2154 24.8496L22.7779 15.0996C22.9261 14.9485 23.102 14.8287 23.2956 14.7469C23.4892 14.6651 23.6967 14.623 23.9062 14.623C24.1158 14.623 24.3233 14.6651 24.5169 14.7469C24.7105 14.8287 24.8864 14.9485 25.0346 15.0996C25.3339 15.4047 25.502 15.8186 25.502 16.2501C25.502 16.4638 25.4607 16.6753 25.3805 16.8727C25.3003 17.0701 25.1828 17.2495 25.0346 17.4006L18.1911 24.3751L36.6562 24.3751C37.0789 24.3751 37.4843 24.5463 37.7832 24.8511C38.0821 25.1558 38.25 25.5691 38.25 26.0001Z", fill: "#808080" }));
const carousel = "_carousel_9tdsj_7";
const card = "_card_9tdsj_16";
const nav = "_nav_9tdsj_58";
const left = "_left_9tdsj_72";
const right = "_right_9tdsj_76";
const classes$3 = {
  carousel,
  "card-container": "_card-container_9tdsj_16",
  card,
  nav,
  left,
  right
};
const CARDS = 10;
const MAX_VISIBILITY = 3;
const Card = ({ title, content, price }) => /* @__PURE__ */ jsxs("div", { className: classes$3.card, children: [
  /* @__PURE__ */ jsx("h2", { children: title }),
  /* @__PURE__ */ jsx("p", { style: { textAlign: "center", maxWidth: "300px" }, children: content }),
  /* @__PURE__ */ jsx("p", { children: "Цены" }),
  /* @__PURE__ */ jsxs("p", { children: [
    "от ",
    price
  ] })
] });
const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React__default.Children.count(children);
  const handleNext = () => {
    if (active < count - 1) {
      setActive((i) => i + 1);
    }
  };
  const handlePrev = () => {
    if (active > 0) {
      setActive((i) => i - 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: classes$3.carousel, children: [
    active > 0 && /* @__PURE__ */ jsx("button", { className: `${classes$3.nav} ${classes$3.left}`, onClick: handlePrev, children: /* @__PURE__ */ jsx(SvgPrevIcon, {}) }),
    active < count - 1 && /* @__PURE__ */ jsx("button", { className: `${classes$3.nav} ${classes$3.right}`, onClick: handleNext, children: /* @__PURE__ */ jsx(SvgNextIcon, {}) }),
    React__default.Children.map(children, (child, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: classes$3["card-container"],
        style: {
          "--active": i === active ? 1 : 0.7,
          "--offset": (active - i) / 3,
          "--direction": Math.sign(active - i),
          "--abs-offset": Math.abs(active - i) / 3,
          "--z-index": i === active ? -1 : 0,
          pointerEvents: active === i ? "auto" : "none",
          opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0.3" : "1",
          display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          margin: i !== active ? "10px" : "",
          marginTop: i !== active ? "-100px" : ""
        },
        children: child
      }
    ))
  ] });
};
const InteractiveGallery = () => {
  return /* @__PURE__ */ jsx(Carousel, { children: [...new Array(CARDS)].map((_, i) => /* @__PURE__ */ jsx(
    Card,
    {
      title: "Удаление вмятин",
      content: "Удаление вмятин с использованием специального инструмента без покраски кузовного элемента (технология pdr)",
      price: "4000р"
    },
    i
  )) });
};
const OurServicess = () => {
  return /* @__PURE__ */ jsxs(Box, { className: classes$4.outServicessWrapper, children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        style: {
          margin: 0
        },
        children: "НАШИ УСЛУГИ"
      }
    ),
    /* @__PURE__ */ jsx(
      "h3",
      {
        style: {
          maxWidth: "400px",
          textAlign: "center",
          margin: 0
        },
        children: "Покраска и кузовной ремонт автомобилей в Нижнем Новгороде"
      }
    ),
    /* @__PURE__ */ jsx(InteractiveGallery, {})
  ] });
};
const rootWrapper = "_rootWrapper_tw1tf_1";
const boxContent = "_boxContent_tw1tf_11";
const formWrapper = "_formWrapper_tw1tf_21";
const formTitle = "_formTitle_tw1tf_36";
const classes$2 = {
  rootWrapper,
  boxContent,
  formWrapper,
  formTitle
};
const Main = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Box, { className: classes$2.rootWrapper, children: /* @__PURE__ */ jsxs(Box, { className: classes$2.boxContent, children: [
      /* @__PURE__ */ jsxs(
        Box,
        {
          style: {
            width: "295px",
            height: "213px",
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          },
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  padding: "5px"
                },
                children: "Ремонт дешевле"
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        transform: "scaleX(-1)",
                        writingMode: "vertical-lr",
                        fontSize: "24px"
                      },
                      children: "АН"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        fontSize: "60px"
                      },
                      children: "45%"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  padding: "5px"
                },
                children: "официального дилера"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Box, { component: "form", className: classes$2.formWrapper, children: [
        /* @__PURE__ */ jsx(Text, { className: classes$2.formTitle, children: "Получить окраску 3ей детали в подарок" }),
        /* @__PURE__ */ jsx(CustomInput, { placeholder: "имя" }),
        /* @__PURE__ */ jsx(CustomInput, { placeholder: "Телефон" }),
        /* @__PURE__ */ jsx(
          Button,
          {
            color: "#900000",
            style: {
              width: 199,
              margin: "0 auto",
              height: "46px"
            },
            children: "Оставить заявку"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AboutBlock, {}),
    /* @__PURE__ */ jsx(OurServicess, {})
  ] });
};
const defaultVal = {
  name: "",
  setName: () => {
  }
};
const context = React__default.createContext(defaultVal);
const { Provider } = context;
const ContextWrapper = ({ children }) => {
  const [name, setName] = useState(defaultVal.name);
  return /* @__PURE__ */ jsx(Provider, { value: { name, setName }, children });
};
const SvgVkIconSvg = (props) => /* @__PURE__ */ React.createElement("svg", { width: 80, height: 80, viewBox: "0 0 118 103", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("g", { filter: "url(#filter0_d_2_6)" }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.6307 63.8428H61.0559C61.0559 63.8428 61.7835 63.7107 62.1473 63.3143C62.5111 62.9178 62.5111 62.125 62.5111 62.125C62.5111 62.125 62.5111 58.6893 63.9662 58.1607C65.4213 57.6321 67.3615 61.5964 69.3017 63.05C70.7568 64.2393 71.8481 63.975 71.8481 63.975L77.1836 63.8428C77.1836 63.8428 79.9726 63.7107 78.6387 61.2C78.5175 61.0678 77.9112 59.4821 74.6371 56.1786C71.2418 52.7428 71.7269 53.4036 75.7285 47.4571C78.1537 43.8893 79.1238 41.775 78.8812 40.7179C78.6387 39.7929 76.8198 40.0571 76.8198 40.0571H70.7568C70.7568 40.0571 70.2717 39.925 70.0292 40.1893C69.6654 40.4536 69.5442 40.85 69.5442 40.85C69.5442 40.85 68.5741 43.625 67.3615 46.0036C64.6938 50.8928 63.6024 51.1571 63.2386 50.8928C62.2685 50.2321 62.5111 47.9857 62.5111 46.5321C62.5111 41.775 63.2386 39.7929 61.1772 39.2643C60.5709 39.1321 60.0859 39 58.3882 39C56.2055 39 54.3866 39 53.4165 39.5286C52.689 39.925 52.2039 40.7179 52.5677 40.7179C52.9315 40.7179 53.9016 40.9821 54.3866 41.6429C54.8717 42.8321 54.8717 44.8143 54.8717 44.8143C54.8717 44.8143 55.2354 50.4964 54.0228 51.1571C53.174 51.6857 52.0827 50.6286 49.6575 46.1357C48.4448 43.8893 47.4748 41.2464 47.4748 41.2464C47.4748 41.2464 47.3535 40.7179 46.9897 40.4536C46.6259 40.1893 46.0196 40.0571 46.0196 40.0571H40.3204C40.3204 40.0571 39.4716 40.0571 39.1078 40.4536C38.8653 40.85 39.1078 41.5107 39.1078 41.5107C39.1078 41.5107 43.5944 52.875 48.6874 58.6893C53.4165 64.2393 58.6307 63.8428 58.6307 63.8428Z", fill: "#FF0C0C", fillOpacity: 0.78 })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("filter", { id: "filter0_d_2_6", x: 0, y: 0, width: 118, height: 103, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ React.createElement("feOffset", null), /* @__PURE__ */ React.createElement("feGaussianBlur", { stdDeviation: 19.5 }), /* @__PURE__ */ React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.0458333 0 0 0 0 0.0458333 0 0 0 0.78 0" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_2_6" }), /* @__PURE__ */ React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_2_6", result: "shape" }))));
const wrapperRoot = "_wrapperRoot_zcgaf_1";
const wrapperBox = "_wrapperBox_zcgaf_9";
const classes$1 = {
  wrapperRoot,
  wrapperBox
};
const Header = () => {
  return /* @__PURE__ */ jsxs("header", { className: classes$1.wrapperRoot, children: [
    /* @__PURE__ */ jsxs(Box, { className: classes$1.wrapperBox, children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          style: {
            fontWeight: "bold",
            textTransform: "uppercase"
          },
          children: "Доктор жесть"
        }
      ),
      /* @__PURE__ */ jsx("span", { children: "Еmail: D.Nesterov@mail.ru" })
    ] }),
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(SvgVkIconSvg, {}) }),
    /* @__PURE__ */ jsxs(Box, { className: classes$1.wrapperBox, style: { textAlign: "right" }, children: [
      /* @__PURE__ */ jsx("span", { children: "+7 (962) 440-05-80" }),
      /* @__PURE__ */ jsx("span", { children: "г.Ставрополь, ул.Шпаковская, 97" })
    ] })
  ] });
};
const footerWrapper = "_footerWrapper_5hjs8_1";
const classes = {
  footerWrapper
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: classes.footerWrapper, children: "Доктор жесть Еmail: D.Nesterov@mail.ru © г.Ставрополь, ул.Шпаковская, 97" });
};
const App = () => {
  return /* @__PURE__ */ jsxs(ContextWrapper, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Main, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const index = "";
function render(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
