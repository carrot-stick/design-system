// import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global-styles";
import theme from "../src/styles/index";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
