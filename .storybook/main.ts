import type { StorybookConfig } from '@storybook/vue3-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/Button.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },  
  viteFinal: async (config) => {
    (config.plugins ??= []).push(tsconfigPaths());

    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias['@ui'] = '../ui';
    return config;
  },
};
export default config;