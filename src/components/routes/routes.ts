import { Route } from './types';

export const gettingStartedRoutes: Route[] = [
  {
    url: '/getting-started/install',
    component: 'install-page',
    props: {
      name: 'Install',
    },
  },
  {
    url: '/getting-started/custombuild',
    component: 'custom-build',
    props: {
      name: 'Custom Build',
    },
  },
];

export const exampleRoutes: Route[] = [
  {
    url: '/examples/login',
    component: 'example-login',
    props: {
      name: 'Example Login',
    },
  },
  {
    url: '/examples/basket',
    component: 'example-basket',
    props: {
      name: 'Example Basket',
    },
  },
];

export const objectsRoutes: Route[] = [
  {
    url: '/objects/containers',
    component: 'objects-containers',
    props: {
      name: 'Containers',
    },
  },
  {
    url: '/objects/grid',
    component: 'objects-grid',
    props: {
      name: 'Grid',
    },
  },
  {
    url: '/objects/panels',
    component: 'objects-panels',
    props: {
      name: 'Panels',
    },
  },
  {
    url: '/objects/images',
    component: 'objects-images',
    props: {
      name: 'Images',
    },
  },
  {
    url: '/objects/drawers',
    component: 'objects-drawers',
    props: {
      name: 'Drawers',
    },
  },
  {
    url: '/objects/medias',
    component: 'objects-medias',
    props: {
      name: 'Medias',
    },
  },
  {
    url: '/objects/modals',
    component: 'objects-modals',
    props: {
      name: 'Modals',
    },
  },
];

export const utilsRoutes: Route[] = [
  {
    url: '/utils/alignment',
    component: 'utils-alignment',
    props: {
      name: 'Alignment',
    },
  },
  {
    url: '/utils/boxing',
    component: 'utils-boxing',
    props: {
      name: 'Boxing',
    },
  },
  {
    url: '/utils/elevation',
    component: 'utils-elevation',
    props: {
      name: 'Elevation',
    },
  },
  {
    url: '/utils/sizes',
    component: 'utils-sizes',
    props: {
      name: 'Sizes',
    },
  },
  {
    url: '/utils/visibility',
    component: 'utils-visibility',
    props: {
      name: 'Visibility',
    },
  },
];

export const componentsRoutes: Route[] = [
  {
    url: '/components/accordions',
    component: 'components-accordions',
    props: {
      name: 'Accordions',
    },
  },
  {
    url: '/components/addresses',
    component: 'components-addresses',
    props: {
      name: 'Addresses',
    },
  },
  {
    url: '/components/alerts',
    component: 'components-alerts',
    props: {
      name: 'Alerts',
    },
  },

  {
    url: '/components/autocomplete',
    component: 'components-autocomplete',
    props: {
      name: 'Autocomplete',
    },
  },
  {
    url: '/components/avatars',
    component: 'components-avatars',
    props: {
      name: 'Avatars',
    },
  },
  {
    url: '/components/back-to-top',
    component: 'components-back-to-top',
    props: {
      name: 'Back to top',
    },
  },
  {
    url: '/components/badges',
    component: 'components-badges',
    props: {
      name: 'Badges',
    },
  },
  {
    url: '/components/buttons',
    component: 'components-buttons',
    props: {
      name: 'Buttons',
    },
  },
  {
    url: '/components/calendars',
    component: 'components-calendars',
    props: {
      name: 'Calendars',
    },
  },
  {
    url: '/components/cards',
    component: 'components-cards',
    props: {
      name: 'Cards',
    },
  },
  {
    url: '/components/counter',
    component: 'components-counter',
    props: {
      name: 'Counter',
    },
  },
  {
    url: '/components/divider',
    component: 'components-divider',
    props: {
      name: 'Divider',
    },
  },
  {
    url: '/components/file-upload',
    component: 'components-file-upload',
    props: {
      name: 'File Upload',
    },
  },
  {
    url: '/components/headings',
    component: 'components-headings',
    props: {
      name: 'Headings',
    },
  },
  {
    url: '/components/inputs',
    component: 'components-inputs',
    props: {
      name: 'Inputs',
    },
  },
  {
    url: '/components/lists',
    component: 'components-lists',
    props: {
      name: 'Lists',
    },
  },
  {
    url: '/components/menus',
    component: 'components-menus',
    props: {
      name: 'Menus',
    },
  },
  {
    url: '/components/overlays',
    component: 'components-overlays',
    props: {
      name: 'Overlays',
    },
  },
  {
    url: '/components/pagination',
    component: 'components-pagination',
    props: {
      name: 'Pagination',
    },
  },
  {
    url: '/components/progress',
    component: 'components-progress',
    props: {
      name: 'Progress',
    },
  },
  {
    url: '/components/ranges',
    component: 'components-ranges',
    props: {
      name: 'Ranges',
    },
  },
  {
    url: '/components/sticky',
    component: 'components-sticky',
    props: {
      name: 'Sticky',
    },
  },
  {
    url: '/components/tables',
    component: 'components-tables',
    props: {
      name: 'Tables',
    },
  },
  {
    url: '/components/tabs',
    component: 'components-tabs',
    props: {
      name: 'Tabs',
    },
  },
  {
    url: '/components/timelines',
    component: 'components-timelines',
    props: {
      name: 'Timelines',
    },
  },
  {
    url: '/components/toasts',
    component: 'components-toasts',
    props: {
      name: 'Toasts',
    },
  },
  {
    url: '/components/toggles',
    component: 'components-toggles',
    props: {
      name: 'Toggles',
    },
  },
  {
    url: '/components/tooltips',
    component: 'components-tooltips',
    props: {
      name: 'Tooltips',
    },
  },
  {
    url: '/components/trees',
    component: 'components-trees',
    props: {
      name: 'Trees',
    },
  },
  {
    url: '/components/typography',
    component: 'components-typography',
    props: {
      name: 'Typography',
    },
  },
];

export const variablesRoutes: Route[] = [
  {
    url: '/variables',
    component: 'variables-all',
    props: {
      name: 'All variables',
    },
  },
];

export const allRoutes = [
  {
    title: 'Getting Started',
    description: 'How to begin using Blaze',
    routes: gettingStartedRoutes,
  },
  {
    title: 'Examples',
    description: '',
    routes: exampleRoutes,
  },
  {
    title: 'Objects',
    description: 'Layout and structure',
    routes: objectsRoutes,
  },
  {
    title: 'Components',
    description: 'Fully styled atomic features',
    routes: componentsRoutes,
  },
  {
    title: 'Utilities',
    description: 'Override helpers',
    routes: utilsRoutes,
  },
];
