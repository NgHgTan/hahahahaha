import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/mainTheme";
import './global.css';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root") // Using ReactDOM.render to render the app
);

reportWebVitals();
