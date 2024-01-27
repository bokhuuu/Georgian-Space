import Offcanvas from "react-bootstrap/Offcanvas";
import WeatherApp from "./WeatherApp";
import { QueryClientProvider, QueryClient } from "react-query";

const weatherQueryClient = new QueryClient();

interface WeatherSidebarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeatherSidebar({ show, setShow }: WeatherSidebarProps) {
  const handleClose = () => setShow(false);

  return (
    <QueryClientProvider client={weatherQueryClient}>
      <Offcanvas
        className="bg-primary"
        show={show}
        onHide={handleClose}
        // style={{
        //   zIndex: 1500,
        //   background: "rgba(123, 148, 168, 0.966)",
        //   opacity: 0.95,
        // }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Today's Forecast</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-danger d-flex flex-wrap">
          <WeatherApp />
        </Offcanvas.Body>
      </Offcanvas>
    </QueryClientProvider>
  );
}

export default WeatherSidebar;
