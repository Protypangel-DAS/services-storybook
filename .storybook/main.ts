import type { StorybookConfig } from '@storybook/vue3-vite';

import { URL } from 'node:url'
const pathname = new URL('../src', import.meta.url).pathname;

const defaultExtensions = ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'];

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

    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias['@'] = pathname;
    config.resolve.alias['@ui'] = pathname + '/ui';

    config.resolve.extensions = [
      ...(config.resolve.extensions ?? defaultExtensions),
      '.vue'      
    ];

    return config;
  },
};
export default config;