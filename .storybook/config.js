import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import theme from '../src/theme.json';
import { ThemeProvider } from 'emotion-theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
