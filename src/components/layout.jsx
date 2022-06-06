import { Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" data-testid="title">
            React Password Generator
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="p-5">
        <Row>{props.children}</Row>
      </Container>
    </>
  );
};

export default Layout;
