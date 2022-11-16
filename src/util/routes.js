import App from 'App';
import {
  Hello,
  Skills,
  Works,
  Contact,
  Experience,
  Page404,
} from 'components/pages';

export const routes = [
  {
    path: '/',
    pathKey: '/',
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: '',
        pathKey: '',
        element: <Hello />,
        errorElement: <Page404 />,
      },
      {
        path: 'skills',
        pathKey: 'skills',
        element: <Skills />,
        errorElement: <Page404 />,
      },
      {
        path: 'works',
        pathKey: 'works',
        element: <Works />,
        errorElement: <Page404 />,
      },
      {
        path: 'experience',
        pathKey: 'experience',
        element: <Experience />,
        errorElement: <Page404 />,
      },
      {
        path: 'contact',
        pathKey: 'contact',
        element: <Contact />,
        errorElement: <Page404 />,
      },
    ],
  },
];
