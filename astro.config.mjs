import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind(), icon()],
});
