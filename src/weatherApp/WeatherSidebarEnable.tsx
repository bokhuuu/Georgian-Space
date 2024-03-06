import { useState } from "react";
import WeatherSidebar from "./WeatherSidebar";
import { motion } from "framer-motion";
import styled from "styled-components";
import weather from "../../public/assets/icons/weather.png";

const WeatherSidebarEnable = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <StyledButton
        type="button"
        onClick={handleShow}
        animate={{
          scale: [1, 1.2, 1],
          textShadow: "0px 10px 20px rgb(255,255,255)",
          boxShadow: "0px 10px 20px rgb(255,255,255)",
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      ></StyledButton>

      <WeatherSidebar show={show} setShow={setShow} />
    </>
  );
};

export const StyledButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  background-color: "white";
  background-size: "cover";
  background-image: url(${weather});
  border-radius: 10%;
  cursor: pointer;
`;

export default WeatherSidebarEnable;
