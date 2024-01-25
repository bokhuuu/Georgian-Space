import Offcanvas from "react-bootstrap/Offcanvas";
import Weather from "./Weather";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
function WeatherSidebar({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>weather</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Weather />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default WeatherSidebar;
