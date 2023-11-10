// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Vuetify
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  colors: {
    primary: "#9652ff",
    success: "#3cd1c2",
    error: "#f83e70",
    warning: "#ff9800",
    info: "#ffaa2c",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});
