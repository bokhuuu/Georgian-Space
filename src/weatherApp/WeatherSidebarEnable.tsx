import { useState } from "react";
import WeatherSidebar from "./WeatherSidebar";
import { motion } from "framer-motion";
import styled from "styled-components";
import waetherIcon from "../assets/icons/weatherIcon.svg";

const WeatherSidebarEnable = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <StyledButton
        type="button"
        onClick={handleShow}
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 20px rgb(255,255,255)",
          boxShadow: "0px 0px 20px rgb(255,255,255)",
          transition: {
            duration: 0.5,
            repeat: 1,
            repeatType: "mirror",
          },
        }}
      ></StyledButton>

      <WeatherSidebar show={show} setShow={setShow} />
    </>
  );
};

const StyledButton = styled(motion.button)`
  width: 37px;
  height: 37px;
  background-color: "white";
  background-size: "cover";
  background-image: url(${waetherIcon});
  cursor: pointer;
`;

export default WeatherSidebarEnable;
