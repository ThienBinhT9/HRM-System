import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { privateRouters, publicRouters } from "./defineRoute.ts";
import { IRoute } from "../interfaces/common-interface.ts";

import NotFound from "../pages/NotFound/NotFound.tsx";
import ProtectRoute from "../pages/ProtectRoute/ProtectRoute.tsx";

function AppRoute() {
  //Hàm đệ quy router
  const renderRouter = (routers: IRoute[]) => {
    return (
      routers &&
      routers.length > 0 &&
      routers.map((router: IRoute, index: number) => {
        const Layout = router.layout || React.Fragment;
        const Comp = router.element;
        return (
          <Route
            key={index}
            path={router.path}
            element={
              <Layout>
                <Comp />
              </Layout>
            }
          >
            {router.children && renderRouter(router.children)}
          </Route>
        );
      })
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        {renderRouter(publicRouters)}

        {/* private route */}
        <Route element={<ProtectRoute />}>{renderRouter(privateRouters)}</Route>

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
