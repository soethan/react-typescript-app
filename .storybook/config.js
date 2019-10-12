import { addParameters, configure } from '@storybook/react';
import createTheme from './createTheme';

addParameters({
  options: {
    theme: createTheme
  }
});

configure(require.context('../stories', true, /\.stories\.js$/), module);
