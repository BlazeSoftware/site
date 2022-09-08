import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import cssnano from 'cssnano';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  taskQueue: 'async',
  plugins: [
    sass(),
    postcss({
      plugins: [
        cssnano({
          preset: [
            'default',
            {
              autoprefixer: { browsers: 'last 2 versions', add: true },
              zindex: false,
            },
          ],
        }),
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      prerenderConfig: './prerender.config.ts',
      baseUrl: 'https://www.blazeui.com',
      copy: [{ src: 'robots.txt' }, { src: '.well-known' }],
    },
  ],
};
