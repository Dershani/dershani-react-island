import { definePreview } from 'storybook-react-rsbuild';
import addonPerformancePanel from '@github-ui/storybook-addon-performance-panel';

const preview = definePreview({
  addons: [addonPerformancePanel()],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
});

export default preview;
export { preview };
