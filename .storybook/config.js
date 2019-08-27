import { configure } from '@storybook/react';
const req = require.context('../src/articles/components', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);
