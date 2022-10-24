import { Hello, Skills, Works } from 'components/pages';

export const routes = [
  {
    path: '/',
    pathKey: '/',
    element: <Hello />,
  },
  {
    path: '/skills',
    pathKey: '/skills',
    element: <Skills />,
  },
  {
    path: '/works',
    pathKey: '/works',
    element: <Works />,
  },
];
