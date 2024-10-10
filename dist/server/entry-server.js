import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Box, Text, Button, createTheme, MantineProvider } from "@mantine/core";
import * as React from "react";
import React__default, { useState } from "react";
const input$2 = "_input_14r8b_1";
const classes$6 = {
  input: input$2
};
const CustomInput = ({ placeholder, type = "text", cb, value }) => {
  return /* @__PURE__ */ jsx("input", { type, className: classes$6.input, placeholder, onChange: cb, value });
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
            children: String(digit)
          }
        )
      ]
    }
  );
};
const About = "/assets/aboutBg-9a05895e.png";
const CARDS$1 = [
  {
    number: 15,
    text: "высококлассных специалистов, имеющих сертификаты"
  },
  {
    number: 927,
    text: "клиентов уже выбрали нас и остались довольны"
  },
  {
    number: 8,
    text: "лет успешных работ по покраске"
  },
  {
    number: 6,
    text: "месяцев гарантии на все выполненные работы"
  }
];
const ABOUT_TEXT = `
Более чем 8-летний опыт кузовного ремонта автомобилей, применение специализированной покрасочной камеры, а так же немецких лакокрасочных материалов ВАSF позволяет дать гарантию на покраску Вашего автомобиля в 4 раза выше, чем у официального дилера!

Ремонт автомобиля в центре кузовного ремонта «Доктор Жесть» это не банальное осваивание бюджета клиента, а комплексный подход по приведению внешнего вида Вашего автомобиля в отличное состояние при оптимальных расходах!
`;
const aboutWrapper = "_aboutWrapper_10icg_1";
const aboutTextBlock = "_aboutTextBlock_10icg_11";
const aboutImage = "_aboutImage_10icg_19";
const boxContent$1 = "_boxContent_10icg_28";
const card$1 = "_card_10icg_40";
const cardText = "_cardText_10icg_48";
const videoBlock = "_videoBlock_10icg_55";
const aboutTextBlockDescroption = "_aboutTextBlockDescroption_10icg_61";
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
const videoUrl = "https://video-waw2-1.xx.fbcdn.net/v/t42.9040-2/65841339_3216078945072612_5577287184458711040_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjQ2MCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjEzMjYzNTM1NjA4NDc1MTB9&_nc_e2o=1326353560847510&_nc_ohc=rBknicihPJQQ7kNvgHAnJpO&rl=460&vabr=256&_nc_ht=video-waw2-1.xx&_nc_gid=ALenXDLxDmlwvwnP6a4agpx&oh=00_AYDNQwUf1aup89NAfbhhKFzQLcrYsIe4VZQLJAsjS88Mpw&oe=6707E15C";
const AboutBlock = () => {
  return /* @__PURE__ */ jsxs(Box, { className: classes$5.aboutWrapper, children: [
    /* @__PURE__ */ jsx("img", { src: About, className: classes$5.aboutImage }),
    /* @__PURE__ */ jsx(Box, { className: classes$5.boxContent, children: CARDS$1.map(({ number, text }) => /* @__PURE__ */ jsxs(Box, { className: classes$5.card, children: [
      /* @__PURE__ */ jsx(StrokeDigit, { digit: number }),
      /* @__PURE__ */ jsx(Text, { classNames: { root: classes$5.cardText }, children: text })
    ] }, number)) }),
    /* @__PURE__ */ jsxs(Box, { className: `${classes$5.boxContent} ${classes$5.videoBlock}`, children: [
      /* @__PURE__ */ jsx(
        "video",
        {
          style: {
            display: "flex",
            width: "746px",
            height: "350px",
            background: "black"
          },
          src: videoUrl,
          controls: true
        }
      ),
      /* @__PURE__ */ jsxs(Box, { className: classes$5.aboutTextBlock, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            styles: {
              root: {
                fontSize: "1.2 rem",
                fontWeight: "bold"
              }
            },
            children: "О нас за 60 секунд"
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: classes$5.aboutTextBlockDescroption, styles: { root: { fontSize: "0.875rem" } }, children: ABOUT_TEXT })
      ] })
    ] })
  ] });
};
const MAX_VISIBILITY = 3;
const getCardStyle = ({ isActive, offset }) => ({
  "--active": isActive ? 1 : 0.7,
  "--offset": `${offset / 3}`,
  "--direction": `${Math.sign(offset)}`,
  "--abs-offset": `${Math.abs(offset) / 3}`,
  "--z-index": `${isActive ? -1 : 0}`,
  pointerEvents: isActive ? "auto" : "none",
  opacity: Math.abs(offset) >= MAX_VISIBILITY ? "0.3" : "1",
  display: Math.abs(offset) > MAX_VISIBILITY ? "none" : "block",
  margin: isActive ? "" : "10px",
  marginTop: isActive ? "" : "-100px"
});
const SvgNextIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 51, height: 52, viewBox: "0 0 51 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.75 25.9999C12.75 25.5689 12.9179 25.1556 13.2168 24.8509C13.5157 24.5461 13.9211 24.3749 14.3437 24.3749L32.8089 24.3749L25.9654 17.4004C25.8172 17.2493 25.6997 17.0699 25.6195 16.8725C25.5393 16.6751 25.498 16.4636 25.498 16.2499C25.498 16.0362 25.5393 15.8247 25.6195 15.6273C25.6997 15.4298 25.8172 15.2505 25.9654 15.0994C26.1136 14.9483 26.2895 14.8285 26.4831 14.7467C26.6767 14.6649 26.8842 14.6228 27.0937 14.6228C27.3033 14.6228 27.5108 14.6649 27.7044 14.7467C27.898 14.8285 28.0739 14.9483 28.2221 15.0994L37.7846 24.8494C37.933 25.0003 38.0508 25.1797 38.1311 25.3771C38.2115 25.5745 38.2528 25.7862 38.2528 25.9999C38.2528 26.2136 38.2115 26.4253 38.1311 26.6227C38.0508 26.8201 37.933 26.9995 37.7846 27.1504L28.2221 36.9004C28.0739 37.0515 27.898 37.1713 27.7044 37.2531C27.5108 37.3349 27.3033 37.377 27.0938 37.377C26.8842 37.377 26.6767 37.3349 26.4831 37.2531C26.2895 37.1713 26.1136 37.0515 25.9654 36.9004C25.6661 36.5953 25.498 36.1814 25.498 35.7499C25.498 35.5362 25.5393 35.3247 25.6195 35.1273C25.6997 34.9298 25.8172 34.7505 25.9654 34.5994L32.8089 27.6249L14.3437 27.6249C13.9211 27.6249 13.5157 27.4537 13.2168 27.1489C12.9179 26.8442 12.75 26.4309 12.75 25.9999Z", fill: "#808080" }));
const SvgPrevIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 51, height: 52, viewBox: "0 0 51 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.25 26.0001C38.25 26.4311 38.0821 26.8444 37.7832 27.1491C37.4843 27.4539 37.0789 27.6251 36.6562 27.6251L18.1911 27.6251L25.0346 34.5996C25.1828 34.7507 25.3003 34.93 25.3805 35.1275C25.4607 35.3249 25.502 35.5364 25.502 35.7501C25.502 35.9638 25.4607 36.1753 25.3805 36.3727C25.3003 36.5701 25.1828 36.7495 25.0346 36.9006C24.8864 37.0517 24.7105 37.1715 24.5169 37.2533C24.3233 37.3351 24.1158 37.3772 23.9062 37.3772C23.6967 37.3772 23.4892 37.3351 23.2956 37.2533C23.102 37.1715 22.9261 37.0517 22.7779 36.9006L13.2154 27.1506C13.067 26.9997 12.9492 26.8203 12.8689 26.6229C12.7885 26.4255 12.7471 26.2138 12.7471 26.0001C12.7471 25.7864 12.7885 25.5747 12.8689 25.3773C12.9492 25.1799 13.067 25.0005 13.2154 24.8496L22.7779 15.0996C22.9261 14.9485 23.102 14.8287 23.2956 14.7469C23.4892 14.6651 23.6967 14.623 23.9062 14.623C24.1158 14.623 24.3233 14.6651 24.5169 14.7469C24.7105 14.8287 24.8864 14.9485 25.0346 15.0996C25.3339 15.4047 25.502 15.8186 25.502 16.2501C25.502 16.4638 25.4607 16.6753 25.3805 16.8727C25.3003 17.0701 25.1828 17.2495 25.0346 17.4006L18.1911 24.3751L36.6562 24.3751C37.0789 24.3751 37.4843 24.5463 37.7832 24.8511C38.0821 25.1558 38.25 25.5691 38.25 26.0001Z", fill: "#808080" }));
const carousel = "_carousel_9tdsj_7";
const card = "_card_9tdsj_16";
const nav = "_nav_9tdsj_58";
const left = "_left_9tdsj_72";
const right = "_right_9tdsj_76";
const classes$4 = {
  carousel,
  "card-container": "_card-container_9tdsj_16",
  card,
  nav,
  left,
  right
};
const CARDS = [
  {
    title: "Покраска",
    content: "Матовая покраска",
    price: "от 10 000 ₽"
  },
  {
    title: "Покраска",
    content: "Покраска в хамелион",
    price: "от 13 000 ₽"
  },
  {
    title: "Покраска",
    content: "Покраска деталей",
    price: "от 10 000 ₽"
  },
  {
    title: "Покраска",
    content: "Полная покраска",
    price: "от 150 000 ₽"
  },
  {
    title: "Кузовные работы",
    content: "рихтовка любой сложности, восстановление геометрии автомобиля, выправка парковочных вмятин без перекраски",
    price: "оценка по факту"
  },
  {
    title: "Кузовные работы",
    content: `удаление вмятин от камней, орехов, каштанов и т.д.
                настройка зазоров
                настройка замков
                предпокрасочная подготовка`,
    price: "оценка по факту"
  },
  {
    title: "Уход за ЛКП",
    content: `абразивная полировка кузова (локальная и полная)
                защита ЛКП кузова «Жидким стеклом» и «Керамикой» Кrytех
                удаление неглубоких царапин
                удаление сколов от камней
               `,
    price: "оценка по факту"
  },
  {
    content: `А так же у нас можно приобрести расходные материалы:
                - пленка для тонировки стекол и фар
                - атермальная пленка
                - пленка для бронирования автомобилей и автостекол
               `
  }
];
const Card = ({ title: title2, content: content2, price }) => /* @__PURE__ */ jsxs("div", { className: classes$4.card, children: [
  /* @__PURE__ */ jsx("h2", { children: title2 }),
  /* @__PURE__ */ jsx("p", { style: { textAlign: "center", maxWidth: "300px" }, children: content2 }),
  /* @__PURE__ */ jsx("p", { children: price && "Цены" }),
  /* @__PURE__ */ jsx("p", { children: price })
] });
const NavigationButton = ({
  icon,
  onClick,
  className
}) => /* @__PURE__ */ jsx("button", { className, onClick, children: icon });
const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
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
  return /* @__PURE__ */ jsxs("div", { className: classes$4.carousel, children: [
    active > 0 && /* @__PURE__ */ jsx(NavigationButton, { icon: /* @__PURE__ */ jsx(SvgPrevIcon, {}), onClick: handlePrev, className: `${classes$4.nav} ${classes$4.left}` }),
    active < count - 1 && /* @__PURE__ */ jsx(NavigationButton, { icon: /* @__PURE__ */ jsx(SvgNextIcon, {}), onClick: handleNext, className: `${classes$4.nav} ${classes$4.right}` }),
    React__default.Children.map(children, (child, i) => /* @__PURE__ */ jsx("div", { className: classes$4["card-container"], style: getCardStyle({ isActive: i === active, offset: active - i }), children: child }))
  ] });
};
const InteractiveGallery = () => /* @__PURE__ */ jsx(Carousel, { children: CARDS.map(({ content: content2, price, title: title2 }, i) => /* @__PURE__ */ jsx(
  Card,
  {
    title: title2,
    content: content2,
    price
  },
  i
)) });
const outServicessWrapper = "_outServicessWrapper_aslrl_1";
const classes$3 = {
  outServicessWrapper
};
const OurServicess = () => {
  return /* @__PURE__ */ jsxs(Box, { className: classes$3.outServicessWrapper, children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        style: {
          margin: 0,
          textTransform: "uppercase"
        },
        children: "наши услуги"
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
        children: "Покраска и кузовной ремонт автомобилей в Ставрополе."
      }
    ),
    /* @__PURE__ */ jsx(InteractiveGallery, {})
  ] });
};
const rootWrapper = "_rootWrapper_s3mvh_1";
const boxContent = "_boxContent_s3mvh_11";
const formWrapper = "_formWrapper_s3mvh_21";
const formTitle = "_formTitle_s3mvh_36";
const classes$2 = {
  rootWrapper,
  boxContent,
  formWrapper,
  formTitle
};
const app = "_app_g9vch_1";
const ellipse$1 = "_ellipse_g9vch_12";
const phoneImage$1 = "_phoneImage_g9vch_21";
const headerSection = "_headerSection_g9vch_29";
const title = "_title_g9vch_36";
const description = "_description_g9vch_43";
const linkMail$1 = "_linkMail_g9vch_51";
const phoneNumber$1 = "_phoneNumber_g9vch_56";
const contactForm = "_contactForm_g9vch_64";
const formGroup = "_formGroup_g9vch_71";
const label$1 = "_label_g9vch_75";
const input$1 = "_input_g9vch_82";
const buttonGroup = "_buttonGroup_g9vch_93";
const button$1 = "_button_g9vch_93";
const styles$1 = {
  app,
  ellipse: ellipse$1,
  phoneImage: phoneImage$1,
  headerSection,
  title,
  description,
  linkMail: linkMail$1,
  phoneNumber: phoneNumber$1,
  contactForm,
  formGroup,
  label: label$1,
  input: input$1,
  buttonGroup,
  button: button$1
};
const rectangle1 = "/assets/rectangle-1-21d76ebd.svg";
const rectangle2 = "/assets/rectangle-2-ff93c4c6.svg";
const rectangle3 = "/assets/rectangle-3-73f391c0.svg";
const rectangle4 = "/assets/rectangle-3-73f391c0.svg";
const background = "/assets/group-388f5bc9.svg";
const phoneImage = "/assets/i-phone-12-pro-1-77d64df1.svg";
const ellipse = "/assets/ellipse-25-223da6c5.svg";
const initFormState$2 = {
  name: "",
  phone: ""
};
const RequestForm = () => {
  const [formState, setFormState] = useState(initFormState$2);
  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initFormState$2);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: styles$1.app, style: { backgroundImage: `url(${background})` }, children: [
    /* @__PURE__ */ jsx("img", { src: ellipse, className: styles$1.ellipse, alt: "ellipse background" }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.headerSection, children: [
      /* @__PURE__ */ jsx("h1", { className: styles$1.title, children: "Оценка стоимости ремонта по фото" }),
      /* @__PURE__ */ jsxs("p", { className: styles$1.description, children: [
        "Отправьте фото поврежденной детали нам через WhatsApp на номер или на электронную почту ",
        /* @__PURE__ */ jsx("a", { href: "mailto:D.Nesterov@mail.ru", className: styles$1.linkMail, children: "D.Nesterov@mail.ru" }),
        " и наши мастера оценят примерную стоимость ремонта"
      ] }),
      /* @__PURE__ */ jsx("a", { className: styles$1.phoneNumber, href: "tel:+79624400580", children: "+7 (962) 440-05-80" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: phoneImage, className: styles$1.phoneImage, alt: "Phone" }),
    /* @__PURE__ */ jsxs("div", { className: styles$1.contactForm, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
        /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Имя" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: styles$1.input,
            style: { backgroundImage: `url(${rectangle1})` },
            onChange: (event) => handleChange(event, "name"),
            value: formState.name
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.formGroup, children: [
        /* @__PURE__ */ jsx("label", { className: styles$1.label, children: "Телефон" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: styles$1.input,
            style: { backgroundImage: `url(${rectangle2})` },
            onChange: (event) => handleChange(event, "phone"),
            value: formState.phone
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: styles$1.buttonGroup, children: [
        /* @__PURE__ */ jsx("button", { className: styles$1.button, style: { backgroundImage: `url(${rectangle3})` }, children: "Добавить фото" }),
        /* @__PURE__ */ jsx("button", { className: styles$1.button, style: { backgroundImage: `url(${rectangle4})` }, onClick: handleSubmit, children: "Оставить заявку" })
      ] })
    ] })
  ] }) });
};
const formSection = "_formSection_1ebdh_1";
const content = "_content_1ebdh_12";
const heading = "_heading_1ebdh_24";
const features = "_features_1ebdh_33";
const feature = "_feature_1ebdh_33";
const featureNumber = "_featureNumber_1ebdh_47";
const featureText = "_featureText_1ebdh_56";
const form = "_form_1ebdh_1";
const inputGroup = "_inputGroup_1ebdh_70";
const label = "_label_1ebdh_75";
const input = "_input_1ebdh_70";
const button = "_button_1ebdh_97";
const carImg = "_carImg_1ebdh_111";
const styles = {
  formSection,
  content,
  heading,
  features,
  feature,
  featureNumber,
  featureText,
  form,
  inputGroup,
  label,
  input,
  button,
  carImg
};
const Car = "/assets/group-17-a632f559.svg";
const initFormState$1 = {
  name: "",
  phone: ""
};
const FormSection = () => {
  const [formState, setFormState] = useState(initFormState$1);
  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initFormState$1);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: styles.formSection, children: [
    /* @__PURE__ */ jsx("img", { src: Car, className: styles.carImg }),
    /* @__PURE__ */ jsxs("div", { className: styles.content, children: [
      /* @__PURE__ */ jsx("h1", { className: styles.heading, children: "Оставьте заявку у нас и вы получите:" }),
      /* @__PURE__ */ jsxs("div", { className: styles.features, children: [
        /* @__PURE__ */ jsxs("div", { className: styles.feature, children: [
          /* @__PURE__ */ jsx(StrokeDigit, { digit: "01" }),
          /* @__PURE__ */ jsx("div", { className: styles.featureText, children: "Предварительную стоимость ремонта" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.feature, children: [
          /* @__PURE__ */ jsx(StrokeDigit, { digit: "02" }),
          /* @__PURE__ */ jsx("div", { className: styles.featureText, children: "Возможность записи на ремонт в удобное время" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.feature, children: [
          /* @__PURE__ */ jsx(StrokeDigit, { digit: "03" }),
          /* @__PURE__ */ jsx("div", { className: styles.featureText, children: "Экономию времени и денег на поиск запчастей" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: styles.form, children: [
        /* @__PURE__ */ jsx("div", { className: styles.inputGroup, children: /* @__PURE__ */ jsx("input", { type: "text", className: styles.input, placeholder: "Имя", onChange: (event) => handleChange(event, "name"), value: formState.name }) }),
        /* @__PURE__ */ jsx("div", { className: styles.inputGroup, children: /* @__PURE__ */ jsx("input", { type: "text", className: styles.input, placeholder: "Телефон", onChange: (event) => handleChange(event, "phone"), value: formState.phone }) }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: styles.button, onClick: handleSubmit, children: "Оставить заявку" })
      ] })
    ] })
  ] }) });
};
const initFormState = {
  name: "",
  phone: ""
};
const Main = () => {
  const [formState, setFormState] = useState(initFormState);
  const handleChange = (e, key) => {
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [key]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initFormState);
  };
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
        /* @__PURE__ */ jsx(CustomInput, { placeholder: "имя", cb: (event) => handleChange(event, "name"), value: formState.name }),
        /* @__PURE__ */ jsx(CustomInput, { placeholder: "Телефон", cb: (event) => handleChange(event, "phone"), value: formState.phone }),
        /* @__PURE__ */ jsx(
          Button,
          {
            color: "#900000",
            style: {
              width: 199,
              margin: "0 auto",
              height: "46px"
            },
            onClick: handleSubmit,
            children: "Оставить заявку"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AboutBlock, {}),
    /* @__PURE__ */ jsx(OurServicess, {}),
    /* @__PURE__ */ jsx(RequestForm, {}),
    /* @__PURE__ */ jsx(FormSection, {})
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
const wrapperRoot = "_wrapperRoot_12rhi_1";
const wrapperBox = "_wrapperBox_12rhi_9";
const linkMail = "_linkMail_12rhi_16";
const phoneNumber = "_phoneNumber_12rhi_22";
const classes$1 = {
  wrapperRoot,
  wrapperBox,
  linkMail,
  phoneNumber
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
      /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "mailto:D.Nesterov@mail.ru", className: classes$1.linkMail, children: "Еmail: D.Nesterov@mail.ru" }) })
    ] }),
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(SvgVkIconSvg, {}) }),
    /* @__PURE__ */ jsxs(Box, { className: classes$1.wrapperBox, style: { textAlign: "right" }, children: [
      /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "tel:+79624400580", className: classes$1.phoneNumber, children: "+7 (962) 440-05-80" }) }),
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
const theme = createTheme({});
function render(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(MantineProvider, { theme, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
}
export {
  render
};
