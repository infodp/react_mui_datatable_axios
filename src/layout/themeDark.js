import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class ThemeDark extends React.Component {
  constructor({ props }) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={darkTheme}>{this.props.children}</ThemeProvider>
    );
  }
}

export { ThemeDark };
