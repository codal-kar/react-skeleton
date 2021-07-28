import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import user from "../../../assets/images/user.jpg";
import { useDispatch } from 'react-redux';
import { logout } from "../../../redux/actions/authAction";

function MainHeader(props) {
    const dispatchCall = useDispatch();

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <i class="fas fa-user-circle"></i> &nbsp; Account
            </Menu.Item>
            <Menu.Item key="2"
                onClick={() => {
                    dispatchCall(logout())
                }}
            >
                <i class="far fa-sign-out"></i> &nbsp; Log Out
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="header flex">
            <div className="hleft flex ai-center">
                <div className="logo">
                    <img
                        alt="logo"
                    />
                </div>

            </div>
            <div className="hright flex ai-center">
                <div className="notification">
                    <i class="fas fa-bell"></i>
                </div>
                <div className="user-ddown">
                    <Dropdown overlay={menu}>
                        <Button>
                            <span className="username">Hi,Mital
                                <small>Codal Inc</small>
                            </span>
                            <i className="fas fa-sort-down"></i>
                        </Button>
                    </Dropdown>
                    <div className="profile-wrap">
                        <figure>
                            <img src={user} alt="" />
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MainHeader;

