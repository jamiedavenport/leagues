import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme.json';
import { ThemeProvider } from 'emotion-theming';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
))

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
