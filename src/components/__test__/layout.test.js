import ReactDOM from "react-dom/client";
import { Layout } from "../index";
import { render, screen } from "@testing-library/react";

it("Renders the layout without crashing", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(<Layout></Layout>);
});

it("Renders the website title correctly", () => {
  render(<Layout></Layout>);
  expect(screen.getByTestId("title")).toHaveTextContent(
    "React Password Generator"
  );
});
