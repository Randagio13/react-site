import { configure } from '@storybook/react'
// import { withKnobs } from '@storybook/addon-knobs/react';


const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

// addDecorator(withKnobs);

configure(loadStories, module);