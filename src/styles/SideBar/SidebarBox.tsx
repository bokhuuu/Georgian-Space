import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { StyledSidebarBoxTitle } from "./SidebarBoxStyles";
import { StyledSidebarBoxBody } from "./SidebarBoxStyles";

interface SidebarBoxProps {
  title: string;
  content: React.ReactNode;
}

const SidebarBox = ({ title, content }: SidebarBoxProps) => {
  const [show, setShow] = useState(false);

  const handleCloseSideBarBox = () => setShow(false);
  const handleShowSideBarBox = () => setShow(true);

  return (
    <>
      <button className="primary" onClick={handleShowSideBarBox}>
        show offcanvas
      </button>
      <Offcanvas
        style={{
          background: "red",
        }}
        show={show}
        onHide={handleCloseSideBarBox}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={StyledSidebarBoxTitle}>
            {title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={StyledSidebarBoxBody}>{content}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarBox;
