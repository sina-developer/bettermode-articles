import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './ProtectedRoute';

function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              element={route.component}
              isGaurded={route.isGaurded}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
