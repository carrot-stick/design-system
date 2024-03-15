import type { Preview } from "@storybook/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(colorScheme|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: { theme },
  },
};

export default preview;
