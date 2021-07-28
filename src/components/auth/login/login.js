import { Button, notification } from 'antd';
import React, { useRef, useState } from 'react';
import ApiUtils from "../../../helpers/apiUtils";
import { login } from '../../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

function Login(props) {
  const api = useRef(new ApiUtils(true, true, true));
  const [tableDataLoading, setTableDataLoading] = useState(false);

  const dispatchCall = useDispatch();

  /**
* 
* @param {*} data 
* post login data
*/
  const postLogin = async () => {
    let req_data = {
      email: "mital@codaldemo.com",
      password: "123456"
    }
    dispatchCall(login({
      ...req_data
    }))

    setTableDataLoading(true);
    try {
      const res = await api.loginCall({ ...req_data });
      if (res.status === 200) {
        if (res.data) {

          // store into redux

          // dispatchCall(login({
          //   ...res.data
          // }))

        }
        else {
          notification.error({
            icon: <i className="fas fa-times-circle"></i>,
            className: 'error-notification',
            message: "Error",
            description: res.data.message,
          });
        }
      }
    } catch (err) {
      console.log(err);
      notification.error({
        icon: <i className="fas fa-times-circle"></i>,
        className: 'error-notification',
        message: "Error",
        description: "Something went wrong",
      });

    }
    finally {
      // setTableDataLoading(false);
    }
  }


  return (
    <div>
      {
        tableDataLoading &&
        <div>
          Loading here.....
        </div>
      }
      Login here
      <Button onClick={postLogin}>
        Click To Login
      </Button>
    </div>
  );
}

export default Login;

