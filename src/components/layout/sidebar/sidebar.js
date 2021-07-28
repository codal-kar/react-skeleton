import React from 'react';
import { ImgSpan } from './sidebar_style';
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";

function MainSidebar(props) {

    const routes = [
        {
            to: "/common",
            icon: "fas fa-users",
            title: "Common",
            key: "/common",
        },
        {
            to: "/module-1",
            icon: "fas fa-users",
            title: "Module 1",
            key: "/module-1",
        },
        {
            to: "/module-2",
            icon: "fas fa-users",
            title: "Module 2",
            key: "/module-2",
        },
        {
            to: "/404",
            icon: "fas fa-users",
            title: "404",
            key: "/404",
        },
        {

        }
    ];
    const getSelectedKey = (pathname) => {

        for (var index = 0; index < routes.length; index++) {
            const element = routes[index];
            if (pathname.includes(element.key)) {
                return element.key;
            }
        }
    }

    return (
        <React.Fragment>
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[
                    getSelectedKey(props.location.pathname)
                ]}
            >
                {routes.map(element => (
                    <Menu.Item key={element.key} className={element.class}>
                        <Link to={element.to}>
                            <ImgSpan className={element.icon} />
                            <span>{element.title}</span>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
            <div className="footer-links">
                <span>CopyRight@2021</span>
            </div>
        </React.Fragment>
    );
}

export default withRouter(MainSidebar);

