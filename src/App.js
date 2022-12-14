import { Fragment, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import ProfilePage from "./pages/User/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path='/profile' element={<ProfilePage />} />
          </Route>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            let Layout = UserLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                exact={route.exact}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
