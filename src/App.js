import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

/**
 * Head
 * Body
 *  - SideBar
 *    - Menu Items
 *  -MainConatiner
 *    ButtonList
 *    VideoContainer
 *      -VideoCard
 * @returns 
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
