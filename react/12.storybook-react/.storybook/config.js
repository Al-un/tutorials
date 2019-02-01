import { configure } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  //   require('../src/components/Task.stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
