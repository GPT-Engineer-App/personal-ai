import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#ff0099",
    800: "#00ffff",
    700: "#ff00ff",
  },
  background: {
    500: "#21094e",
  },
  text: {
    500: "#ffffff",
  },
};

const theme = extendTheme({ colors, config: { initialColorMode: "dark" } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
