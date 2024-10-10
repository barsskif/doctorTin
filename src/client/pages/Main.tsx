import { Box, Button, Text } from "@mantine/core";

import { CustomInput } from "../components/CustomInput";
import { AboutBlock } from "../components/AboutBlock";
import { OurServicess } from "../components/OurServicess";

import classes from "./Main.module.css";
import { RequestForm } from "../components/RequestForm";
import { FormSection } from "../components/FormSection";
import { Examples } from "../components/Examples";
import React, { ChangeEvent, useState } from "react";

const initFormState = {
  name: '',
  phone: '',
}

const Main = () => {
  const [formState, setFormState] = useState(initFormState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: 'name' | 'phone') => {
      const value = e.target.value
      setFormState(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      setFormState(initFormState)
  }

  
  return (
    <>
      <Box className={classes.rootWrapper} >
        <Box className={classes.boxContent}>
          <Box
            style={{
              width: "295px",
              height: "213px",
              fontSize: "20px",
              fontWeight: "bold",
              lineHeight: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                padding: "5px",
              }}
            >
              Ремонт дешевле
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  transform: "scaleX(-1)",
                  writingMode: "vertical-lr",
                  fontSize: "24px",
                }}
              >
                АН
              </span>
              <span
                style={{
                  fontSize: "60px",
                }}
              >
                45%
              </span>
            </div>
            <span
              style={{
                padding: "5px",
              }}
            >
              официального дилера
            </span>
          </Box>
          <Box component="form" className={classes.formWrapper}>
            <Text className={classes.formTitle}>Получить окраску 3ей детали в подарок</Text>
            <CustomInput placeholder="имя" cb={(event) => handleChange(event, 'name')} value={formState.name}/>
            <CustomInput placeholder="Телефон"  cb={(event) => handleChange(event, 'phone')} value={formState.phone}/>

            <Button
              color="#900000"
              style={{
                width: 199,
                margin: "0 auto",
                height: "46px",
              }}
              onClick={handleSubmit}
            >
              Оставить заявку
            </Button>
          </Box>
        </Box>
      </Box>
      <AboutBlock />
      <OurServicess />
   
      <RequestForm />
      {/* <Examples /> */}
      <FormSection />
    </>
  );
};

export default Main;
