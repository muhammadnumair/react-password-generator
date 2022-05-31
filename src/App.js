import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Layout, PasswordGenerator } from "./components";

function App() {
  return (
    <Layout>
      <Row>
        <Col style={{ maxWidth: "50%" }} className="mx-auto password-container">
          <PasswordGenerator />
          <ToastContainer />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
