import { configure } from '@storybook/react';
import '@storybook/addon-console';

const req = require.context('../src/articles/components', true, /.stories.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);
