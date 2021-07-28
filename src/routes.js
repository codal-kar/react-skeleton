import React, { useState, Suspense, lazy } from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { RightOutlined } from '@ant-design/icons';
import BackToTop from "react-back-to-top-button";
import {
  StyledHeader,
  //  StyledLogo,
  CustomSider, StyledContent, RightLayout, TriggerHeader
} from './routes_style';

import MainHeader from './components/layout/header/header';
import MainSidebar from './components/layout/sidebar/sidebar';
import LoaderMain from './shared_components/loader/loader';


require("dotenv").config()

const Common = lazy(() =>
  import("./shared_components/common_style/common")
);

const ModuleOne = lazy(() =>
  import("./components/main_content/module_one/module_one")
);

const ModuleTwo = lazy(() =>
  import("./components/main_content/module_two/module_two")
);

const ErrorPage = lazy(() =>
  import("./components/404_page/error_page")
);

const routes = [

  {
    exact: true,
    path: "/module-1",
    component: () => <ModuleOne />
  },
  {
    exact: true,
    path: "/module-2",
    component: () => <ModuleTwo />
  },
  {
    exact: true,
    path: "/common",
    component: () => <Common />
  },
  {
    exact: true,
    path: "/404",
    component: () => <ErrorPage />
  },
];


function AppRouter(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [currentClass, setCurrentClass] = useState("close-sidebar");

  const toggle = () => {
    setCollapsed(!collapsed)
    document.querySelector('body').classList.toggle('sidebar-collapsed');
  };

  const onMouseEnter = () => {
    setCurrentClass("open-sidebar")
  }
  const onMouseLeave = () => {
    setTimeout(function () {
      setCurrentClass("close-sidebar")
    }, 3000);
  };

  return (
    <Layout>
      <CustomSider
        trigger={null}
        collapsible
        collapsed={collapsed}
        // className="left-sidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={currentClass}
      >
        <div className="side-logos">
        </div>
        <MainSidebar />
      </CustomSider>
      <RightLayout className="right-sidebar">
        <div className="trigger-header">
          <TriggerHeader className="icon-parent">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            <RightOutlined
              className="trigger trigger-icon"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle}
            />
          </TriggerHeader>
          <StyledHeader className="top-notification">
            <MainHeader collapsedsidebar={collapsed} />
          </StyledHeader>
        </div>
        <StyledContent className={`${props.location.pathname.includes('404') ? "remove-top-space-404" : "remove-top-space"} loader-full-width`}>
          <Suspense className="loader"
            fallback={
              <LoaderMain></LoaderMain>
            }
          >
            <Switch>
              {routes.map(singleRoute => (
                <Route
                  exact={singleRoute.exact === false ? false : true}
                  key={singleRoute.path}
                  path={`${singleRoute.path}`}
                  component={singleRoute.component}
                  {...props}
                />
              ))}
              <Redirect from="/" to="/404" />
            </Switch>
          </Suspense>
        </StyledContent>
        <BackToTop
          showAt={300}
          speed={1000}
          easing="easeOutSine"
        >
          <span className="back-top">
            <div className="round">
              <div id="cta">
                <span className="arrow primera next "></span>
                <span className="arrow segunda next "></span>
              </div>
            </div>
          </span>
        </BackToTop>
      </RightLayout>
    </Layout>
  );
}
export default withRouter(AppRouter);

