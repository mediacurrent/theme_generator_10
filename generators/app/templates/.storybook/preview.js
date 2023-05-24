import "../src/stories/global/bootstrap.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
}
