import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import AppRouter from "./routes";
// NonLogedInComponents
import Login from './components/auth/login/login';
import { useSelector } from 'react-redux';

function App() {

    const customHistory = createBrowserHistory({ basename: process.env.REACT_APP_PATHOFBUILD });
    const isLoggedIn = useSelector(state => state.auth.isLogin);

    const NonLogedInRoutes = ({ component: Component, isLoggedIn, ...rest }) => (
        <Route
            {...rest}
            render={props => {
                if (isLoggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/common",
                                state: { from: props.location }
                            }}
                        />
                    );
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    );
    const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
        <Route
            {...rest}
            render={props => {
                if (isLoggedIn) {
                    if (props.location.pathname === "/") {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/common",
                                    state: { from: props.location }
                                }}
                            />
                        );
                    } else {
                        return <Component {...props} />;
                    }
                } else {
                    if (props.location.pathname === "/") {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: { from: props.location }
                                }}
                            />
                        );
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        );
                    }
                }
            }}
        />
    );
    return (
        <div className="App">
            {/* <Provider store={store}> */}
            <Router history={customHistory} basename={process.env.REACT_APP_PATHOFBUILD}>
                <Route
                    render={({ location }) => (
                        <Switch location={location}>
                            <NonLogedInRoutes isLoggedIn={isLoggedIn} path="/" exact title="Login" component={Login} />
                            <NonLogedInRoutes isLoggedIn={isLoggedIn} path="/login" exact title="Login" component={Login} />

                            <RestrictedRoute
                                path="/"
                                component={AppRouter}
                                isLoggedIn={isLoggedIn}
                            />
                        </Switch>
                    )}
                />
            </Router>
            {/* </Provider> */}
        </div>
    );
}

export default App;

