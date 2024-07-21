import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './components/Error';
import NotFound from './components/NotFound';
import Home from './screens/Home';
import ComingSoon from './screens/ComingSoon';
import NowPlaying from './screens/NowPlaying';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
