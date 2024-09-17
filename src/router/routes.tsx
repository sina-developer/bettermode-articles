import Article from '../pages/article/article';
import Articles from '../pages/articles/articles';
import Login from '../pages/login/login';
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
];
