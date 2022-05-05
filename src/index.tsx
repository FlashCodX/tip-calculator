import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/globals.css";
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(<App />);
