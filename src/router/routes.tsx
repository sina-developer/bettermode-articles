import Article from '../pages/article';
import Articles from '../pages/articles';
import Login from '../pages/login';
import NotFound from '../pages/not-found';
import { RoutesConfig } from '../types/global';

export const routes: RoutesConfig = [
  {
    path: '/',
    component: <Articles />,
    isGaurded: true,
  },
  {
    path: '/post/:id',
    component: <Article />,
    isGaurded: true,
  },
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '*',
    component: <NotFound />,
  },
];
